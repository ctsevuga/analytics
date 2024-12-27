import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    examNo: {
      type: Number,
    },
    qno: {
      type: Number,
    },

    question: {
      type: String,
    },
    optionA: {
      type: String,
    },
    optionB: {
      type: String,
    },
    optionC: {
      type: String,
    },
    optionD: {
      type: String,
    },
    currectOption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
