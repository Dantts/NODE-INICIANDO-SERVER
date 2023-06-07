import { Router } from "express";

const homeController = Router();

homeController.get("/", (req, res) => {});

homeController.post("/", (req, res) => {});

homeController.put("/", (req, res) => {});

homeController.patch("/", (req, res) => {});

homeController.delete("/", (req, res) => {});

export default homeController;
