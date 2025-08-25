const Blog = require("../models/Blog");
const { mongooseToObject } = require("../../util/mongoose");
const { multiplemongooseToObject } = require("../../util/mongoose");

class BlogController {
  // [GET] /blogs
  list(req, res, next) {
    try {
      Blog.find({}).then((blog) => {
        res.render("home", { blogs: multiplemongooseToObject(blog) });
      }); // Thêm .lean()
      // res.json(multiplemongooseToObject(blogs)); // Trả về JSON thay vì render
    } catch (err) {
      next(err);
    }
  }
  // [GET] /blogs/:slug
  detail(req, res, next) {
    try {
      Blog.findOne({ slug: req.params.slug }).then((blog) => {
        res.render("blogs/show", { blog: mongooseToObject(blog) });
        // res.json(mongooseToObject(blog));
      });
    } catch (err) {
      next(err);
    }
  }
  // [POST] /blogs/create
  create(req, res, next) {
    res.render("blogs/create");
  }
  // [GET] /blogs/:id/edit
  edit(req, res, next) {
    try {
      Blog.findById(req.params.id).then((blog) => {
        res.render("blogs/edit", { blog: mongooseToObject(blog) });
        // res.json(mongooseToObject(blog));
      });
    } catch (error) {
      next(error);
    }
  }
  // [PUT] /blogs/:id
  update(req, res, next) {
    try {
      Blog.updateOne({ _id: req.params.id }, req.body).then((blog) => {
        res.redirect("/me/stored/blogs");
      });
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
  store(req, res, next) {
    const formData = req.body;
    const blog = new Blog(formData);
    if (!formData.name || !formData.description || !formData.level) {
      res.status(404);
      throw new Error("All fields are required!");
    }
    try {
      blog.save().then(() => {
        res.redirect("/me/stored/blogs");
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BlogController();
