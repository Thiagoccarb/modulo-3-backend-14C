"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes_1 = __importDefault(require("../enums/StatusCodes"));
const fields = ['name', 'email', 'password'];
function validateFields(data) {
    for (let i = 0; i <= fields.length; i++) {
        const field = fields[i];
        if (!Object.hasOwnProperty.call(data, field)) {
            return [false, field];
        }
    }
    return [true, null];
}
function validateValues(data) {
    const entries = Object.entries(data);
    for (let i = 0; i <= entries.length; i++) {
        const entry = entries[i];
        console.log(entry);
        const [key, value] = entry;
        if (!value) {
            return [false, key];
        }
    }
    return [true, null];
}
function validadeUser(req, res, next) {
    const userData = req.body;
    let [isValid, field] = validateFields(userData);
    console.log(isValid, field);
    if (!isValid) {
        return res.status(StatusCodes_1.default.UNPROCESSABLE_ENTITY).json({
            message: `${field} is required`,
        });
    }
    [isValid, field] = validateValues(userData);
    if (!isValid) {
        return res.status(StatusCodes_1.default.UNPROCESSABLE_ENTITY).json({
            message: `${field} cannot be empty, null or undefined`,
        });
    }
    next();
}
;
exports.default = validadeUser;
