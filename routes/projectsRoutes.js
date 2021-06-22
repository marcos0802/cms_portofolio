import express from "express";
import {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/", getProjects);

router.post("/", createProject);

router.get("/:id", getProject);

router.delete("/:id", deleteProject);

router.patch("/:id", updateProject);

export default router;
 