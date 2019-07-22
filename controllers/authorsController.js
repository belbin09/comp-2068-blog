const Author = require('../models/author');

exports.create = (req, res) => {
  Author.create(req.body.author)
  .then(() => res.status(200).send({success: "Author created successfully"}))
  .catch(err => res.status(404).send(err));
};