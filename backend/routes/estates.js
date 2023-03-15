import express from "express";
const router = express.Router();

import { newEstate, getEstateInfo, getEstateByID } from "../controllers/estates.js";

router.post("/makeEstate", newEstate);
router.get("/estateinfo", getEstateInfo);
router.get("/estateId", getEstateByID);

export default router;