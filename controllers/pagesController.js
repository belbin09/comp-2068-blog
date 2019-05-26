exports.show = (req, res) => {
  // http://localhost:4000/ || https://localhost:4000/about || /contact
  const path = (req.path === '/') ? '/home' : req.path;

  // render the view
  res.render(`pages${path}`); // views/pages/about
};
