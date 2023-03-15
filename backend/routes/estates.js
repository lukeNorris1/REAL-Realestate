import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";
import { newEstate, getEstateInfo } from "../controllers/estates.js";

router.post("/makeEstate", newEstate);
router.get("/estateinfo", getEstateInfo);

export default router;