"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const books_1 = __importDefault(require("./routes/books"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use('/', books_1.default);
app.listen(PORT, () => console.log(`running on port ${PORT}`));
