const express = require("express");
const router = express.Router();
const postsController = require("../app/controllers/PostsController");
const validateToken = require("../app/middleware/validateTokenHandler");

router.get("/", postsController.Posts);
router.get("/User", validateToken, postsController.UserOfPosts);
router.get("/:slug", postsController.PostDetail);
router.post("/", validateToken, postsController.Create);
router.get("/User/:id", validateToken, postsController.Edit);
router.put("/User/:id", validateToken, postsController.Update);
router.delete("/User/:id", validateToken, postsController.Delete);

module.exports = router;
