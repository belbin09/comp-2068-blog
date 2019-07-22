const Author = require('../models/author');
const jwt = require("jsonwebtoken");

exports.authenticate = (req, res) => {
  Author.findOne({
    email: req.body.email
  })
  .then(author => {
    if (!author) throw new Error('ERROR: Your credentials do not match');
    
    author.authenticate(req.body.password, (err, isMatch) => {
      if (err) throw new Error(err);

      if (isMatch) {
        req.session.userId = author.id;
        
        const token = jwt.sign(
          {payload: req.body.email}, 
          "bobthebuilder", 
          {expiresIn: "1h"}
        );
        res.cookie('token', token, {httpOnly:true});
      } else {
        res.json({error: "Your credentials do not match"});
      }
    });
  })
  .catch(err => {
    res,json(err);
  });
};

exports.logout = (req, res) => {
  req.isAuthenticated();
  
  req.session.userId = null;
  req.flash('success', 'You are now logged out');
  res.redirect('/');
};
