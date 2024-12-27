import asyncHandler from "../middleware/asyncHandler.js";
import Practice from "../models/practiceModel.js";

const getPractices = asyncHandler(async (req, res) => {
  // console.log(req.params.subject_no);
  const practices = await Practice.find({ examNo: req.params.practice_no });
  // const subjects = await Subject.find({});
  // console.log(subjects);
  if (practices) {
    res.json(practices);
  } else {
    res.status(404);
    throw new Error("Practices not found");
  }
});

export { getPractices };
