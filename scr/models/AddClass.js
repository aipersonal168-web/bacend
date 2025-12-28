// models/Student.model.js
import { DataTypes, Model, QueryTypes } from "sequelize";
import db from "../config/db.js";
import { getAddClasss } from "../controllers/classController.js";

class AddClass extends Model {

 
  // Custom query with joins
  static async getAddClasss({ yearId, semesterId, shiftId, roomId }) {
  //  console.log("Model received params:", yearId, semesterId, shiftId, roomId);
    const sql = `
     SELECT 
    student_id,
    student_name,
    year_id,
    gender,
    semester_id,
    shift_id,
    room_id
FROM addclass_students
WHERE year_id = :yearId
  AND semester_id = :semesterId
  AND shift_id = :shiftId
  AND room_id = :roomId;

    `;



    return await db.query(sql, {
      replacements: { yearId, semesterId, shiftId, roomId },
      type: QueryTypes.SELECT,
    });
  }
}

AddClass.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shift_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "AddClass",
    tableName: "addclass_students",
    timestamps: false,
  }
);

export default AddClass;
