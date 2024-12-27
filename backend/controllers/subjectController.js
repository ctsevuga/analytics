import asyncHandler from "../middleware/asyncHandler.js";
import Subject from "../models/subjectsModel.js";

const getSubjects = asyncHandler(async (req, res) => {
  // console.log(req.params.subject_no);
  const subjects = await Subject.find({ subject_no: req.params.subject_no });
  // const subjects = await Subject.find({});
  // console.log(subjects);
  if (subjects) {
    res.json(subjects);
  } else {
    res.status(404);
    throw new Error("Subjects not found");
  }
});

export { getSubjects };
