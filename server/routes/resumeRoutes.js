import express from "express";
import { getUserResumes } from "../controllers/resumeController.js";
import protect from "../Middlewares/authMiddleware.js";

const resumeRouter = express.Router();

// parameters (1. endpoint, middleware (if any), konsa controller )
resumeRouter.get("/resumes", protect, getUserResumes);
export default resumeRouter;
