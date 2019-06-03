const blog = require('../models/blog');

exports.new = (req, res) => {
  res.render('blogs/new', {
    title: 'New Blog Post'
  });
};

exports.index = (req, res) => {
  blog.find()
  .then(blogs => {
    res.render('blogs/index', {
      blogs: blogs,
      title: 'Archive'
    });
  })
  .catch(err => console.log(`ERROR: ${err}`));
};

exports.show = (req, res) => {

};

exports.create = (req, res) => {
  blog.create(req.body.blog)
  .then(() => {
      res.redirect('/blogs');
    })
  .catch(err => {
      console.log(`ERROR: ${err}`);
    });
};

exports.drafts = (req, res) => {

};

exports.published = (req, res) => {

};
