import fs from 'fs/promises';

const file: string = 'plants.json';

export interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean | undefined,
  origin: string,
  size: number | undefined,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

export class Plants implements IPlant {
  id: string;

  breed: string;

  needsSun: Boolean | undefined;

  origin: string;

  size: number | undefined;

  specialCare?: { waterFrequency: number }

  constructor() {
    this.id = '';
    this.breed = '';
    this.needsSun = undefined;
    this.origin = '';
    this.size = undefined;
  }

  static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? <number>size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (<number>size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  static async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  static async getPlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  static async removePlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(file, JSON.stringify(newPlants));

    return removedPlant;
  }

  async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) => {
      if (plant.needsSun && plant.id === id
        && (!plant.specialCare || plant.specialCare.waterFrequency > 2)) {
        return true;
      }
      return false;
    });
    return filteredPlants;
  }

  async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(file, JSON.stringify(updatedPlants));
    return newPlant;
  }

  async savePlant(plant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(file, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = Plants.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile(file, JSON.stringify(plants));
    return newPlant;
  }
}