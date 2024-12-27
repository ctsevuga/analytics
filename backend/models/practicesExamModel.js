import mongoose from "mongoose";

const practicesExamSchema = mongoose.Schema(
  {
    TotalQuestion: {
      type: Number,
      required: true,
      default: 0.0,
    },
    examNo: {
      type: Number,
    },
    minutes: {
      type: Number,
      required: true,
      default: 0.0,
    },
    seconds: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const PracticesExam = mongoose.model("PracticesExam", practicesExamSchema);

export default PracticesExam;
