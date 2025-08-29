class UploadController {
  async image(req, res, next) {
    try {
      if (!req.file) {
        res.status(400).json({ status: 400, message: "No file uploaded" });
      }
      console.log(req.file);

      const fileUrl = `http://localhost:8888/images/${req.file.filename}`;
      res.json({
        message: "Upload sucess",
        filePath: fileUrl,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UploadController();
