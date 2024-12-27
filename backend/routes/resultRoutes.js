import express from "express";
const router = express.Router();
import {
  addResults,
  getMyResults,
  getResultById,
  getResults,
} from "../controllers/resultController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").post( addResults).get( getResults);
router.route("/mine/:user_id").get( getMyResults);
router.route("/:id").get( getResultById);

export default router;
