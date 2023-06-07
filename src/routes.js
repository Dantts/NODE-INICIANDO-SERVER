import { Router } from "express";
import homeController from "./controller/homeController";

const router = Router();

router.use("/home", homeController);

export default router;
