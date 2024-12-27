import express from "express";
import { getSubjects } from "../controllers/subjectController.js";

const router = express.Router();

router.route('/:subject_no').get(getSubjects);

export default router;
