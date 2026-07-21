const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const uploadDirectory = path.join(__dirname, "..", "uploads", "papers");

// Create upload directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Allowed MIME Types
const allowedMimeTypes = [
    "application/pdf",
];

// Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },

    filename: (req, file, cb) => {
        const uniqueFilename =
            crypto.randomUUID() +
            path.extname(file.originalname).toLowerCase();

        cb(null, uniqueFilename);
    },
});

// File Filter
const fileFilter = (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(
            new Error("Only PDF files are allowed."),
            false
        );
    }

    cb(null, true);
};

// Upload Middleware
const uploadPaper = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 20 * 1024 * 1024, // 20 MB
        files: 1,
    },
});

module.exports = uploadPaper;