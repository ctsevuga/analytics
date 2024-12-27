import asyncHandler from "../middleware/asyncHandler.js";
import PracticesExam from "../models/practicesExamModel.js";

const getPracticesExam = asyncHandler(async (req, res) => {
  
  console.log("Controller is working fine")
  const practicesExam = await PracticesExam.find({ examNo: req.params.examNo });

  if (practicesExam) {
    res.json(practicesExam);
  } else {
    res.status(404);
    throw new Error("Exam Details not found");
  }
});

export { getPracticesExam };
