import Student from "../models/Student.model.js";


// Create Student
export const createStudent = async (req, res) => {
  try {
    const { student_id, student_name,gender} = req.body;
console.log(student_id, student_name,gender);
    if (!student_id || !student_name||!gender) {
      return res.status(400).json({ error: "student_card and student_name gender are required" });
    }

    const exists = await Student.findOne({ where: { student_id } });
    if (exists) {
      return res.status(409).json({ error: "Student already exists" });
    }

    const student = await Student.create({
      student_id,
      student_name,
      gender,
    });
    // console.log(student);
    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get Student by ID
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({ where: { id: id } });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update Student
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, student_name,gender } = req.body;

    const student = await Student.findOne({ where: { id: id } });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await student.update({
      student_id,
      student_name,
      gender
    });

    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({ where: {id: id } });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await student.destroy();

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Count total students
async function getTotalStudents(req, res) {
  try {
    const total = await Student.countStudents();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export { getTotalStudents };

// GET /api/students/count
export const countStudents = async (req, res) => {
  try {
    const total = await Student.countStudents();
    res.json({ total });
  } catch (err) {
    res.status(500).json({ message: "Error counting students" });
  }
};


// Search Students with filters


