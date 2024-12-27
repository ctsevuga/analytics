import asyncHandler from "../middleware/asyncHandler.js";
import SubjectsExam from "../models/subjectsExamModel.js";

const getSubjectsExam = asyncHandler(async (req, res) => {
  const subject_no = req.query.subject_no;
  const examNo = req.query.examNo;
  
  const subjectsExam = await SubjectsExam.find({subject_no,examNo});
 
  if (subjectsExam) {
    res.json(subjectsExam);
  } else {
    res.status(404);
    throw new Error("Exam Details not found");
  }
});

export { getSubjectsExam };
