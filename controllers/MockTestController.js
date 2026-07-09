const MockTest = require("../models/MockTest");

// ==============================
// Create Mock Test
// ==============================
exports.createMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Mock Test created successfully",
      data: mockTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Mock Tests
// ==============================
exports.getAllMockTests = async (req, res) => {
  try {
    const mockTests = await MockTest.find()
      .populate("createdBy", "name email")
      .populate("questions", "question subject difficulty")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: mockTests.length,
      data: mockTests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Single Mock Test
// ==============================
exports.getMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.findById(req.params.id)
      .populate("createdBy", "name email")
      .populate("questions");

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock Test not found",
      });
    }

    res.status(200).json({
      success: true,
      data: mockTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Mock Test
// ==============================
exports.updateMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock Test not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Mock Test updated successfully",
      data: mockTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Delete Mock Test
// ==============================
exports.deleteMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.findById(req.params.id);

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock Test not found",
      });
    }

    await mockTest.deleteOne();

    res.status(200).json({
      success: true,
      message: "Mock Test deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Publish / Unpublish Mock Test
// ==============================
exports.toggleMockTestStatus = async (req, res) => {
  try {
    const mockTest = await MockTest.findById(req.params.id);

    if (!mockTest) {
      return res.status(404).json({
        success: false,
        message: "Mock Test not found",
      });
    }

    mockTest.status =
      mockTest.status === "Draft" ? "Published" : "Draft";

    await mockTest.save();

    res.status(200).json({
      success: true,
      message: `Mock Test ${mockTest.status} successfully`,
      data: mockTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Mock Test Statistics
// ==============================
exports.getMockTestStatistics = async (req, res) => {
  try {
    const total = await MockTest.countDocuments();

    const published = await MockTest.countDocuments({
      status: "Published",
    });

    const draft = await MockTest.countDocuments({
      status: "Draft",
    });

    const mockTests = await MockTest.find();

    const totalQuestions = mockTests.reduce(
      (sum, test) => sum + test.questions.length,
      0
    );

    const averageQuestions =
      total > 0 ? (totalQuestions / total).toFixed(2) : 0;

    res.status(200).json({
      success: true,
      data: {
        total,
        published,
        draft,
        averageQuestions,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};