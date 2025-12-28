// controllers/classController.js
import AddClass from '../models/AddClass.js'; // Your Sequelize model
import Student from '../models/Student.model.js'; // Your Sequelize model
import sequelize from '../config/db.js';

export const moveStudents = async (req, res) => {
  const t = await sequelize.transaction(); // Transaction to ensure atomic insert
  try {
    const { students } = req.body; // Must match Laravel key
    console.log(students);
// Collect IDs for deletion
    const studentIds = students.map(s => s.st_id);
    if (!students || !Array.isArray(students) || students.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No students received"
      });
    }

    // Optional: validate each student object
    for (const s of students) {
      if (!s.student_id || !s.student_name) {
        return res.status(422).json({
          success: false,
          message: "Student object missing required fields"
        });
      }
    }

    // Insert into database
    await AddClass.bulkCreate(students, { transaction: t });

      // 4️⃣ Delete moved students from 'students' table
     await Student.destroy({
      where: { id: studentIds },
      transaction: t
    });
    await t.commit();

    return res.json({
      success: true,
      message: `Successfully inserted ${students.length} students`
    });

  } catch (err) {
    await t.rollback();
    console.error("Error inserting students:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to insert students: " + err.message
    });
  }
};

export const getAddClasss = async (req, res) => {
  try {
    // 👇 Catch from frontend
    let { yearId, semesterId, shiftId, roomId } = req.query;
    // console.log(yearId, semesterId, shiftId, roomId);
    // ✅ Convert to number
    yearId     = Number(yearId);
    semesterId = Number(semesterId);
    shiftId = Number(shiftId);
    roomId = Number(roomId);

    // ✅ Validate (important)
    if (
      !Number.isInteger(yearId) ||
      !Number.isInteger(semesterId) 
    ) {
      return res.status(400).json({
        message: "Invalid parameters from frontend"
      });
    }

    // 👇 Pass to model
    const  AddClasss = await  AddClass.getAddClasss({
      yearId,
      semesterId,
      shiftId,
     roomId
    });

    res.json( AddClasss);

    if (students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

  } catch (error) {
    // console.error("Controller error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getallAddClass = async (req, res) => {
    try {
        const data = await AddClass.findAll();
       res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
