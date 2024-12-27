import express from "express";
import { getSubjectsExam } from "../controllers/subjectsExamController.js";

const router = express.Router();

router.route('/').get(getSubjectsExam);

export default router;
