const Blog = require('../models/Blog');
const { multiplemongooseToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /stored/blogs
  storedBlogs(req, res, next) {
    Blog.find({})
      .then(blogs => {
        res.render('me/stored-blogs', {
          blogs: multiplemongooseToObject(blogs),
        });
      })
      .catch(next);
  }
  // [GET] /trash/blogs
  trashBlogs(req, res, next) {
    Blog.findDeleted({})
      .then(blogs => {
        res.render('me/trash-blogs', {
          blogs: multiplemongooseToObject(blogs),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();