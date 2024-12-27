import express from "express";
import { getPractices } from "../controllers/practiceController.js";

const router = express.Router();

router.route('/:practice_no').get(getPractices);

export default router;
