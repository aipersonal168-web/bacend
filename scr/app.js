import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import studentRoutes from "./routes/student.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import yearRoutes from "./routes/year.js";
import semesterRoutes from "./routes/semester.js";
import shiftRoutes from "./routes/shift.js";
import roomRoutes from "./routes/room.js";
import classRoutes from "./routes/classRoutes.js";
import gbfsRoutes from "./routes/gbfs.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));

// API routes
app.use("/api", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/years", yearRoutes);
app.use("/api/semesters", semesterRoutes);
app.use("/api/shifts", shiftRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/class", classRoutes);
app.use("/api/gbfs", gbfsRoutes);

export default app;
