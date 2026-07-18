const mongoose = require("mongoose");

const mockTestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Mock test title is required"],
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    exam: {
      type: String,
      required: [true, "Exam category is required"],
      trim: true,
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
    },

    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: 1,
    },

    totalMarks: {
      type: Number,
      required: true,
      min: 1,
    },

    passingMarks: {
      type: Number,
      required: true,
      min: 0,
    },

    negativeMarking: {
      type: Number,
      default: 0,
      min: 0,
    },

    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Helpful indexes
mockTestSchema.index({ exam: 1 });
mockTestSchema.index({ subject: 1 });
mockTestSchema.index({ status: 1 });

module.exports = mongoose.model("MockTest", mockTestSchema);