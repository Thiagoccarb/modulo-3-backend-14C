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
exports.Plants = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const file = 'plants.json';
class Plants {
    constructor() {
        this.id = '';
        this.breed = '';
        this.needsSun = undefined;
        this.origin = '';
        this.size = undefined;
    }
    static initPlant(plant) {
        const { id, breed, needsSun, origin, specialCare, size } = plant;
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        const newPlant = {
            id,
            breed,
            needsSun,
            origin,
            specialCare: Object.assign(Object.assign({}, specialCare), { waterFrequency }),
            size,
        };
        return newPlant;
    }
    static getPlants() {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            return plants;
        });
    }
    static getPlantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            const plantById = plants.find((plant) => plant.id === id);
            if (!plantById)
                return null;
            return plantById;
        });
    }
    removePlantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            const removedPlant = plants.find((plant) => plant.id === id);
            if (!removedPlant)
                return null;
            const newPlants = plants.filter((plant) => plant.id !== id);
            yield promises_1.default.writeFile(file, JSON.stringify(newPlants));
            return removedPlant;
        });
    }
    getPlantsThatNeedsSunWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            const filteredPlants = plants.filter((plant) => {
                if (plant.needsSun && plant.id === id
                    && (!plant.specialCare || plant.specialCare.waterFrequency > 2)) {
                    return true;
                }
                return false;
            });
            return filteredPlants;
        });
    }
    editPlant(plantId, newPlant) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            const updatedPlants = plants.map((plant) => {
                if (plant.id === plantId)
                    return newPlant;
                return plant;
            });
            yield promises_1.default.writeFile(file, JSON.stringify(updatedPlants));
            return newPlant;
        });
    }
    savePlant(plant) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(file, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            const newPlant = Plants.initPlant(Object.assign({}, plant));
            plants.push(newPlant);
            const opsInfoRaw = yield promises_1.default.readFile('opsInfo.json', { encoding: 'utf8' });
            let { createdPlants } = JSON.parse(opsInfoRaw);
            createdPlants += 1;
            yield promises_1.default.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));
            yield promises_1.default.writeFile(file, JSON.stringify(plants));
            return newPlant;
        });
    }
}
exports.Plants = Plants;
