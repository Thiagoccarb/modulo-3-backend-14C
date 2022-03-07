"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes_1 = __importDefault(require("../enums/StatusCodes"));
const regex = /^[0-9a-zA-Z]{6,12}$/;
function validadePassword(req, res, next) {
    const { password } = req.body;
    const isValid = regex.test(password);
    if (!isValid) {
        return res.status(StatusCodes_1.default.UNPROCESSABLE_ENTITY).json({
            message: `password must have between 6 to 12 characters`,
        });
    }
    next();
}
;
exports.default = validadePassword;
