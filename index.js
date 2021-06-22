import express from "express";
import cors from "cors";

import db from "./config/db.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// - register view engine -
app.set("view engine", "ejs");

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
