const IndexPage = (req, res) => {
    res.render("index", { title: "Home Page" });
  };
  
  module.exports = {
    IndexPage,
  };
  