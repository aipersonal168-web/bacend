// models/Student.model.js
import { DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Student extends Model {
  // 🔢 Count all students
  static async countStudents() {
    return await Student.count();
  }

  // Custom query with joins
  static async getStudents({ yearId, semesterId, shiftId, roomId }) {
    const sql = `
      SELECT 
        s.id,
        s.student_card,
        s.student_name,
        s.gender,
        r.name  AS room_name,
        sh.name AS shift_name,
        se.name AS semester_name,
        y.name  AS year_name
      FROM students s
      JOIN rooms     r  ON s.room_id     = r.id
      JOIN shifts    sh ON s.shift_id    = sh.id
      JOIN semesters se ON s.semester_id = se.id
      JOIN years     y  ON s.year_id     = y.id
      WHERE s.year_id     = :yearId
        AND s.semester_id = :semesterId
        AND s.shift_id    = :shiftId
        AND s.room_id     = :roomId
    `;

    return await db.query(sql, {
      replacements: { yearId, semesterId, shiftId, roomId },
      type: QueryTypes.SELECT,
    });
  }
}

Student.init(
  {
    // 🔑 Primary key
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    // 🆔 Student card (alphanumeric)
    student_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    // 👤 Student name
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Student",
    tableName: "students",
    timestamps: false,
  }
);

export default Student;
