import express, { Request, Response, Router } from 'express';

// eslint-disable-next-line import/extensions
import { IPlant, Plants } from './plants';

const PORT = 3000;
const INTERNAL_ERROR = 'internal_error';
const NOT_FOUND = 'plant not found';

const app = express();
const router = Router();

app.use(express.json());

router.get(
  '/plants',
  async (req: Request, res: Response) => {
    try {
      const plants: IPlant[] = await Plants.getPlants();
      return res.status(200).json({ plants });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

router.get(
  '/plant/:id',
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const plant: IPlant | null = await Plants.getPlantById(id);
      if (!plant) return res.status(404).json({ message: NOT_FOUND });
      return res.status(200).json({ plant });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

router.delete(
  '/plant/:id',
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const plant: IPlant | null = await Plants.removePlantById(id);
      if (!plant) return res.status(404).json({ message: NOT_FOUND });
      return res.status(200).json({ plant });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

router.put(
  '/plant/:id',
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { plant } = req.body;
       await Plants.editPlant(id, plant);
      return res.status(200).json({ plant });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

router.post(
  '/plant',
  async (req: Request, res: Response) => {
    try {
      const { plant } = req.body;
       await Plants.savePlant(plant);
      return res.status(201).json({ plant });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

router.get(
  '/sunny/:id',
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
       const plants = await Plants.getPlantsThatNeedsSunWithId(id);
      return res.status(201).json({ plants });
    } catch (err) {
      const { message } = err as Error;
      console.error(message);
      return res.status(500).json({ message: INTERNAL_ERROR });
    }
  },
);

app.use(
  '/',
  router,
);

app.listen(PORT, () => console.log(`running on port ${PORT}`));