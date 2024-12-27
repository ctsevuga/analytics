import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
 

    topicNo: {
      type: Number,
      required: true,
      default: 0.0,
    },
    topic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
