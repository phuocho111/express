const express = require("express");
const router = express.Router();
const blogController = require("../app/controllers/BlogController");
const validateToken = require("../app/middleware/validateTokenHandler");

router.use(validateToken);

router.get("/", blogController.list);
router.post("/", blogController.create);
router.get("/:id", blogController.edit);
router.put("/:id", blogController.update);
router.patch("/:id/restore", blogController.restore);
router.delete("/:id", blogController.delete);
router.delete("/:id/force", blogController.forceDelete);
router.get("/:slug", blogController.detail);

module.exports = router;
