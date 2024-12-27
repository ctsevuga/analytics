import mongoose from "mongoose";

const subjectsExamSchema = mongoose.Schema(
  {
    subject_no: {
      type: Number,
      
    },
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

const SubjectsExam = mongoose.model("SubjectsExam", subjectsExamSchema);

export default SubjectsExam;
