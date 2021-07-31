import CreatePlatformControllerFactory from '@main/factories/controllers/CreatePlatformControllerFactory';
import { Router } from 'express';

const categoryRouter = Router();
const createPlatformController = CreatePlatformControllerFactory();

categoryRouter.post('/', createPlatformController.handle.bind(createPlatformController));

export default categoryRouter;