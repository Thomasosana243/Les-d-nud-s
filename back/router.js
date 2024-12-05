import express from "express";

const router = express.Router();

import {
  sayHello,
  getAllBikes,
  getBikesByBrand,
  getBikeById,
} from "./motoAction.js";

router.get("/", sayHello);
router.get("/motos", getAllBikes);
router.get("/motosByBrand", getBikesByBrand);
router.get("/moto/:id", getBikeById);

export default router;
