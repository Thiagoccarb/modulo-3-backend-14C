"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../utils");
const statusCodes_1 = __importDefault(require("../enums/statusCodes"));
const validationBook_1 = __importDefault(require("../middlewares/validationBook"));
const router = (0, express_1.Router)();
router.get("/books", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, utils_1.read)('./books.json');
        return res.status(statusCodes_1.default.OK).json(books);
    }
    catch (err) {
        console.error(err);
        res.status(statusCodes_1.default.INTERNAL_ERROR).json({ message: err.message });
    }
}));
router.get("/books/:isbn", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isbn } = req.params;
        const books = yield (0, utils_1.read)('./books.json');
        const book = books.find((book) => book.isbn === isbn);
        if (!book)
            return res.status(statusCodes_1.default.NOT_FOUND).json({ message: 'book not found' });
        return res.status(statusCodes_1.default.OK).json(book);
    }
    catch (err) {
        console.error(err);
        res.status(statusCodes_1.default.INTERNAL_ERROR).json({ message: err.message });
    }
}));
router.post("/books", validationBook_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = req.body;
        const books = yield (0, utils_1.read)('./books.json');
        const newBooks = [...books, newBook];
        yield (0, utils_1.write)(newBooks);
        return res.status(statusCodes_1.default.CREATED).json(newBooks);
    }
    catch (err) {
        console.error(err);
        res.status(statusCodes_1.default.INTERNAL_ERROR).json({ message: err.message });
    }
}));
router.put("/books/:isbn", validationBook_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = req.body;
        const { isbn } = req.params;
        const books = yield (0, utils_1.read)('./books.json');
        const index = books.findIndex(({ isbn }) => Number(isbn) === Number(isbn));
        if (index === -1) {
            return res.status(statusCodes_1.default.NOT_FOUND).json({ message: 'Sorry, book not found' });
        }
        books.splice(index, 1, updatedBook);
        yield (0, utils_1.write)(books);
        return res.status(statusCodes_1.default.OK).json(books);
    }
    catch (err) {
        console.error(err.message);
        res.status(statusCodes_1.default.INTERNAL_ERROR).json({ message: err.message });
    }
}));
router.delete("/books/:isbn", (req, res) => {
});
exports.default = router;
