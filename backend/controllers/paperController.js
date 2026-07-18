const fs = require("fs");
const path = require("path");
const Paper = require("../models/Paper");


// ==========================================
// Upload Paper
// ==========================================

exports.uploadPaper = async (req, res) => {
  try {
    const {
      title,
      exam,
      subject,
      year,
      description,
      status,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required.",
      });
    }

    const paper = await Paper.create({
      title,
      exam,
      subject,
      year,
      description,
      status,
      pdfUrl: `/uploads/papers/${req.file.filename}`,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Paper uploaded successfully.",
      paper,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// Get All Papers
// ==========================================

exports.getAllPapers = async (req, res) => {
  try {

    const papers = await Paper.find()
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: papers.length,
      papers,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// Get Single Paper
// ==========================================

exports.getPaperById = async (req, res) => {
  try {

    const paper = await Paper.findById(req.params.id)
      .populate("uploadedBy", "name email");

    if (!paper) {
      return res.status(404).json({
        success: false,
        message: "Paper not found.",
      });
    }

    res.json({
      success: true,
      paper,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Update Paper
// ==========================================

exports.updatePaper = async (req, res) => {
  try {

    const updates = { ...req.body };

    if (req.file) {
      updates.pdfUrl = `/uploads/papers/${req.file.filename}`;
    }

    const paper = await Paper.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!paper) {
      return res.status(404).json({
        success: false,
        message: "Paper not found.",
      });
    }

    res.json({
      success: true,
      message: "Paper updated successfully.",
      paper,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Delete Paper
// ==========================================

exports.deletePaper = async (req, res) => {
  try {

    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        success: false,
        message: "Paper not found.",
      });
    }

    const filePath = path.join(
      __dirname,
      "..",
      paper.pdfUrl
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await paper.deleteOne();

    res.json({
      success: true,
      message: "Paper deleted successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Download Paper
// ==========================================

exports.downloadPaper = async (req, res) => {
  try {

    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        success: false,
        message: "Paper not found.",
      });
    }

    paper.downloads += 1;
    await paper.save();

    const filePath = path.join(
      __dirname,
      "..",
      paper.pdfUrl
    );

    res.download(filePath);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Statistics
// ==========================================

exports.getStatistics = async (req, res) => {
  try {

    const totalPapers = await Paper.countDocuments();

    const published = await Paper.countDocuments({
      status: "Published",
    });

    const draft = await Paper.countDocuments({
      status: "Draft",
    });

    const totalDownloads = await Paper.aggregate([
      {
        $group: {
          _id: null,
          downloads: {
            $sum: "$downloads",
          },
        },
      },
    ]);

    res.json({
      success: true,

      statistics: {
        totalPapers,
        published,
        draft,
        totalDownloads:
          totalDownloads.length > 0
            ? totalDownloads[0].downloads
            : 0,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};