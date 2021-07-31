import CreateCategoryControllerFactory from '@main/factories/controllers/CreateCategoryControllerFactory';
import { Router } from 'express';

const categoryRouter = Router();
const createController = CreateCategoryControllerFactory();

categoryRouter.post('/', createController.handle.bind(createController));

export default categoryRouter;