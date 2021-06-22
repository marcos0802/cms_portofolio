import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./config/db.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// - register view engine -
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("projects/index", { title: "Home" });
});

// app.get("/", (req, res) => {
//   res.redirect("/blogs");
// });

//app.use("/blogs", blogRoutes);

// - 404 Page -
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

const PORT = process.env.PORT || 5000;

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log("MySql Connected...");
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  }
});
