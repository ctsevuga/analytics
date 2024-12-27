import asyncHandler from "../middleware/asyncHandler.js";
import Result from "../models/resultModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addResults = asyncHandler(async (req, res) => {
  const {
    // questions,

    user,
    subject,
    practice,
    total,
    noOfCorrect,
    percentage,
  } = req.body;
  console.log(total);

  const result = new Result({
    user: user,
    subject,
    practice,
    total,
    noOfCorrect,
    percentage,
  });

  const createdResult = await result.save();

  res.status(201).json(createdResult);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyResults = asyncHandler(async (req, res) => {
  console.log( req.params.user_id );
  const results = await Result.find({ user: req.params.user_id });
  res.json(results);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getResultById = asyncHandler(async (req, res) => {
  const result = await Result.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (result) {
    res.json(result);
  } else {
    res.status(404);
    throw new Error("Result not found");
  }
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getResults = asyncHandler(async (req, res) => {
  const results = await Result.find({}).populate("user", "id name");
  res.json(results);
});

export { addResults, getMyResults, getResultById, getResults };
