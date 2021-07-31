import categoryRouter from "@presentation/routes/CategoryRoutes";
import { Router } from "express";

const router = Router();

router.use('/category', categoryRouter);

export default router;