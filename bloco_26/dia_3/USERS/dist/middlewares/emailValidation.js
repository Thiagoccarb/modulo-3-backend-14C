"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes_1 = __importDefault(require("../enums/StatusCodes"));
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
function validadeEmail(req, res, next) {
    const { email } = req.body;
    const isValid = emailRegex.test(email);
    if (!isValid) {
        return res.status(StatusCodes_1.default.UNPROCESSABLE_ENTITY).json({
            message: `incorrect email format`,
        });
    }
    next();
}
;
exports.default = validadeEmail;
