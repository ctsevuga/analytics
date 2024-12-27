import asyncHandler from "../middleware/asyncHandler.js";
import Question from "../models/questionModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getQuetions = asyncHandler(async (req, res) => {
  // console.log(req.params.examNo);
  const questions = await Question.find({ examNo: req.params.examNo });

  res.json( questions );
  // const products = await Product.find()
  // res.json({ products});
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createQuestion = asyncHandler(async (req, res) => {
  const question = new Question({
    examNo: 1,
  });

  const createdQuestion = await question.save();
  res.status(201).json(createdQuestion);
});

export { getQuetions, createQuestion };
