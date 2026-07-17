const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = "uploads";

// Create uploads folder automatically
if (!fs.existsSync(uploadPath)) {

    fs.mkdirSync(uploadPath, { recursive: true });

}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, uploadPath);

    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname).toLowerCase();

        cb(null, uniqueName);

    }

});

const fileFilter = (req, file, cb) => {

    const allowedMimeTypes = [

        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"

    ];

    if (allowedMimeTypes.includes(file.mimetype)) {

        cb(null, true);

    }

    else {

        cb(
            new Error(
                "Only JPG, JPEG, PNG and WEBP images are allowed."
            ),
            false
        );

    }

};

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 5 * 1024 * 1024 // 5 MB

    }

});

module.exports = upload;