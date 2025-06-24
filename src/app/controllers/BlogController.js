const Blog = require('../models/Blog');
const { mongooseToObject } = require('../../util/mongoose');

class BlogController {

  // [GET] /blogs/:slug
  show(req, res, next) {
    Blog.findOne({ slug: req.params.slug }).then(blog => {
      res.render('blogs/show', { blog: mongooseToObject(blog) })
    }).catch(next)
  }
  // [POST] /blogs/create
  create(req, res, next) {
    res.render('blogs/create');
  }
  // [GET] /blogs/:id/edit
  edit(req, res, next) {
    Blog.findById(req.params.id).then(blog => {
      res.render('blogs/edit', { blog: mongooseToObject(blog) })
    }).catch(next)
  }
  // [PUT] /blogs/:id
  update(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body).then((blog) => {
      res.redirect('/me/stored/blogs');
    }).catch(next);
  }
  // [DELETE] /blogs/:id
  delete(req, res, next) {
    Blog.delete({ _id: req.params.id }).then(() => {
      res.redirect('/me/stored/blogs');
    }).catch(next);
  }
  // [POST] /blogs/store
  store(req, res, next) {
    const formData = req.body;
    const blog = new Blog(formData);
    console.log(blog);
    blog.save().then(() => {
      res.redirect('/');
    }).catch(error => { })
  }
}

module.exports = new BlogController();