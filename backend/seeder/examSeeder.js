require("dotenv").config();

const mongoose = require("mongoose");
const Exam = require("../models/Exam");

const exams = [
  {
    name: "IBPS Clerk",
    slug: "ibps-clerk",
    category: "Banking",
    description:
      "Institute of Banking Personnel Selection Clerk Examination",
    icon: "🏦",
    subjects: [
      "English Language",
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General Awareness",
      "Computer Knowledge",
    ],
  },
  {
    name: "IBPS PO",
    slug: "ibps-po",
    category: "Banking",
    description:
      "Institute of Banking Personnel Selection Probationary Officer Examination",
    icon: "🏦",
    subjects: [
      "English Language",
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General Awareness",
      "Computer Knowledge",
    ],
  },
  {
    name: "SBI Clerk",
    slug: "sbi-clerk",
    category: "Banking",
    description: "State Bank of India Clerk Examination",
    icon: "🏦",
    subjects: [
      "English Language",
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General Awareness",
      "Computer Knowledge",
    ],
  },
  {
    name: "SBI PO",
    slug: "sbi-po",
    category: "Banking",
    description: "State Bank of India Probationary Officer Examination",
    icon: "🏦",
    subjects: [
      "English Language",
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General Awareness",
      "Computer Knowledge",
    ],
  },
  {
    name: "SSC CGL",
    slug: "ssc-cgl",
    category: "SSC",
    description:
      "Staff Selection Commission Combined Graduate Level Examination",
    icon: "🏛️",
    subjects: [
      "General Intelligence & Reasoning",
      "General Awareness",
      "Quantitative Aptitude",
      "English Comprehension",
    ],
  },
  {
    name: "SSC CHSL",
    slug: "ssc-chsl",
    category: "SSC",
    description:
      "Staff Selection Commission Combined Higher Secondary Level Examination",
    icon: "🏛️",
    subjects: [
      "General Intelligence",
      "General Awareness",
      "Quantitative Aptitude",
      "English Language",
    ],
  },
  {
    name: "RRB NTPC",
    slug: "rrb-ntpc",
    category: "Railway",
    description:
      "Railway Recruitment Board Non-Technical Popular Categories",
    icon: "🚆",
    subjects: [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Awareness",
    ],
  },
  {
    name: "RRB Group D",
    slug: "rrb-group-d",
    category: "Railway",
    description: "Railway Recruitment Board Group D Examination",
    icon: "🚆",
    subjects: [
      "Mathematics",
      "General Intelligence & Reasoning",
      "General Science",
      "General Awareness",
    ],
  },
];

const seedExams = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    await Exam.deleteMany();

    await Exam.insertMany(exams);

    console.log("✅ Exams Seeded Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedExams();