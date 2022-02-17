"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes_1 = __importDefault(require("../enums/StatusCodes"));
function error(err, _req, res, _next) {
    console.error(err.message);
    return res.status(StatusCodes_1.default.INERNAL_ERROR).json({ message: err.message });
}
;
exports.default = error;
