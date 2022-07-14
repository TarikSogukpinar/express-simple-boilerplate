const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const indexRoutes = require("./routes/indexRoutes");

const app = express();
dotenv.config();

app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", indexRoutes);

app.use((req, res) => {
  res.render("404", { title: "Page Not Found!" });
  res.status(404);
});
