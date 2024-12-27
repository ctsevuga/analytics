import mongoose from "mongoose";

const resultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    // questions: [
    //   {

    //     qno: {
    //       type: Number,
    //     },

    //     question: {
    //       type: String,
    //     },
    //     optionA: {
    //       type: String,
    //     },
    //     optionB: {
    //       type: String,
    //     },
    //     optionC: {
    //       type: String,
    //     },
    //     optionD: {
    //       type: String,
    //     },
    //     currectOption: {
    //       type: String,
    //     },
    //     selectedOption: {
    //       type: String,
    //     },
    //     selectedOption: {
    //       type: String,
    //     },
    //     correct: {
    //       type: Boolean,
    //       required: true,
    //     },
    //   },
    // ],
    subject: {
      type: String,
    },
    practice: {
      type: Number,
    },
    total: {
      type: Number,
      required: true,
      default: 0.0,
    },
    noOfCorrect: {
      type: Number,
      required: true,
      default: 0.0,
    },
    percentage: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;
