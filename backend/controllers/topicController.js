import asyncHandler from "../middleware/asyncHandler.js";
import Topic from "../models/topicsModel.js";

const getTopics = asyncHandler(async (req, res) => {
  console.log(req.params.topicNo);
  const topics = await Topic.find({ topicNo: req.params.topicNo });
  // const subjects = await Subject.find({});
  // console.log(subjects);
  if (topics) {
    res.json(topics);
  } else {
    res.status(404);
    throw new Error("Topics not found");
  }
});

export { getTopics };
