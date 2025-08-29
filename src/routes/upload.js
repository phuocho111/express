const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const uploadController = require("../app/controllers/UploadController");
const validateToken = require("../app/middleware/validateTokenHandler");

// // Cấu hình Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/Images", upload.single("file"), uploadController.image);

module.exports = router;
