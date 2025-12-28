import express from "express";
import { loginUser } from "../controllers/user.controller.js";

const router = express.Router();

// Login route
// POST /api/users/login
router.post("/login", loginUser);

export default router;
