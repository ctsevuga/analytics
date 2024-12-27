import express from "express";
const router = express.Router();
import {
  getQuetions,
  // getQuestionById,
  // createQuestion,
} from "../controllers/questionController.js";

router.route("/:examNo").get(getQuetions);

// router.route("/:id").get(getQuestionById);

export default router;
