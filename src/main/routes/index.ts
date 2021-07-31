import platformRouter from "@presentation/routes/PlatformRoutes";
import { Router } from "express";

const router = Router();

router.use('/platform', platformRouter);

export default router;