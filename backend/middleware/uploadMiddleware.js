const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const uploadDirectory = path.join(__dirname, "..", "uploads");

// Create upload directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Allowed MIME Types
const allowedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
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
            new Error("Only JPG, JPEG, PNG and WEBP images are allowed."),
            false
        );
    }

    cb(null, true);
};

// Upload Middleware
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
        files: 1,
    },
});

module.exports = upload;