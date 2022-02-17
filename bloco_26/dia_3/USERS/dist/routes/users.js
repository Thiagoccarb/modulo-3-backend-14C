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
const userValidation_1 = __importDefault(require("../middlewares/userValidation"));
const passwordValidation_1 = __importDefault(require("../middlewares/passwordValidation"));
const emailValidation_1 = __importDefault(require("../middlewares/emailValidation"));
const utils_1 = require("../utils");
const StatusCodes_1 = __importDefault(require("../enums/StatusCodes"));
const router = (0, express_1.Router)();
const file = 'users.json';
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', userValidation_1.default, passwordValidation_1.default, emailValidation_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        let users = yield (0, utils_1.read)(file);
        const existingEmail = users.find((user) => user.email === email);
        if (existingEmail)
            return res.status(StatusCodes_1.default.CONFLICT).json({ message: 'email already registered' });
        const id = users.length + 1;
        const newUser = { id, name, password, email };
        users = [...users, newUser];
        yield (0, utils_1.write)(users);
        return res.status(StatusCodes_1.default.CREATED).json(users);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        next(err);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
