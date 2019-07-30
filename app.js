const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// Initilize application
const app = express();

// Load Routes
const curric = require("./routes/curriculum");


// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Index Page
app.get("/", (req, res) => {
  res.render("index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

// FAQ Page
app.get("/faq", (req, res) => {
  res.render("faq");
});

// Use Route
app.use("/curriculum", curric);

const port = process.env.PORT || 5000;
 
app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
