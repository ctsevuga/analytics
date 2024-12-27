import mongoose from "mongoose";

const practiceSchema = mongoose.Schema(
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
    subject_no: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Practice = mongoose.model("Practice", practiceSchema);

export default Practice;
