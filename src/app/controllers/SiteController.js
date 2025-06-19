const Blog = require('../models/Blog');
const { multiplemongooseToObject } = require('../../util/mongoose');

class SiteController {
  // [GET] /news
  async index(req, res, next) {
    try {
      const blogs = await Blog.find({}); // Thêm .lean()
      res.render('home', { blogs: multiplemongooseToObject(blogs) });
    } catch (err) {
      next(err)
    }
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();