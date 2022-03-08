"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
// eslint-disable-next-line import/extensions
const plants_1 = require("./plants");
const PORT = 3000;
const app = (0, express_1.default)();
const router = (0, express_1.Router)();
app.use(express_1.default.json());
router.get('/plants', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plants = yield plants_1.Plants.getPlants();
        return res.status(200).json({ plants });
    }
    catch (err) {
        const { message } = err;
        console.error(message);
        return res.status(500).json({ message: 'internal error' });
    }
}));
router.get('/plants/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const plant = yield plants_1.Plants.getPlantById(id);
        if (!plant)
            return res.status(404).json({ message: 'plant not found' });
        return res.status(200).json({ plant });
    }
    catch (err) {
        const { message } = err;
        console.error(message);
        return res.status(500).json({ message: 'internal error' });
    }
}));
app.use('/', router);
app.listen(PORT, () => console.log(`running on port ${PORT}`));
