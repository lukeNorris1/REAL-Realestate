import express from "express";
const router = express.Router();

import { newEstate, getEstateInfo, getEstateByCity } from "../controllers/estates.js";

router.post("/makeEstate", newEstate);
router.get("/estateinfo", getEstateInfo);
router.get("/estateCity", getEstateByCity);

export default router;