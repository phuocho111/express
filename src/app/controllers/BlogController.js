const Blog = require("../models/Blog");
const { mongooseToObject } = require("../../util/mongoose");
const { multiplemongooseToObject } = require("../../util/mongoose");

class BlogController {
  // [GET] /blogs
  async list(req, res, next) {
    try {
      const blogs = await Blog.find({ user_id: req.user.id })
      res.render("home", { blogs: multiplemongooseToObject(blogs) });
      // res.json(multiplemongooseToObject(blogs));

    } catch (err) {
      next(err);
    }
  }
  // [GET] /blogs/:slug
  async detail(req, res, next) {
    try {
      const blogItem = await Blog.findOne({ slug: req.params.slug })
      if (blogDetail.user_id !== req.user.id) {
        res.status(403);
        throw new Error('User is not authorized to view this blog');
      }
      res.render("blogs/show", { blog: mongooseToObject(blogItem) });
      // res.json(mongooseToObject(blog));
    } catch (err) {
      next(err);
    }
  }
  // [POST] /blogs/create
  create(req, res, next) {
    res.render("blogs/create");
  }
  // [GET] /blogs/:id/edit
  async edit(req, res, next) {
    try {
      const blogDetail = await Blog.findById(req.params.id)
      if (blogDetail.user_id !== req.user.id) {
        res.status(403);
        throw new Error('User is not authorized to edit this blog');
      }
      res.render("blogs/edit", { blog: mongooseToObject(blogDetail) });
      // res.json(mongooseToObject(blog));
    } catch (error) {
      next(error);
    }
  }
  // [PUT] /blogs/:id
  update(req, res, next) {
    try {
      const blogUpdate = Blog.updateOne({ _id: req.params.id }, req.body)
      if (blogUpdate.user_id !== req.user.id) {
        res.status(403);
        throw new Error('User is not authorized to update this blog');
      }
      res.redirect("/me/stored/blogs");
    } catch (error) {
      next(error);
    }
  }
  // [DELETE] /blogs/:id
  delete(req, res, next) {
    try {
      Blog.delete({ _id: req.params.id }).then(() => {
        res.redirect("/me/stored/blogs");
      });
    } catch (error) {
      next(error);
    }
  }
  // [PATCH] /blogs/:id/restore
  restore(req, res, next) {
    try {
      Blog.restore({ _id: req.params.id }).then(() => {
        res.redirect("/me/trash/blogs");
      });
    } catch (error) {
      next(error);
    }
  }
  // [DELETE] /blogs/:id/force
  forceDelete(req, res, next) {
    try {
      Blog.deleteOne({ _id: req.params.id }).then(() => {
        res.redirect("/me/trash/blogs");
      });
    } catch (error) {
      next(error);
    }
  }
  // [POST] /blogs/store
  async store(req, res, next) {
    const { name, description, level } = req.body;
    if (!name || !description || !level) {
      res.status(404);
      throw new Error("All fields are required!");
    }
    try {
      const newBlog = await Blog.create({
        name,
        description,
        level,
        user_id: req.user.id, // Lấy user_id từ req.user
      });
      res.status(201).json(newBlog);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BlogController();
