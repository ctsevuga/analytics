import express from "express";
import { getPracticesExam } from "../controllers/practicesExamController.js";

const router = express.Router();

router.route('/:examNo').get(getPracticesExam);

export default router;
