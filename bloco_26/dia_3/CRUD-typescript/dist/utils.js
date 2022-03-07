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
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
const promises_1 = require("fs/promises");
function read(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, promises_1.readFile)(file, 'utf-8');
        const Books = JSON.parse(data);
        return JSON.parse(data);
    });
}
exports.read = read;
function write(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, promises_1.writeFile)('./books.json', JSON.stringify(data));
        return file;
    });
}
exports.write = write;
