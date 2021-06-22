import express from "express";
import mysql from "mysql";

import db from "./config/db.js";

const app = express();

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
