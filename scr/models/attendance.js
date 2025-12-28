import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Attendance = db.define('attendance', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  student_id: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  student_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  teacher_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  yearId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  semesterId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shiftId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  week: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('present', 'absent', 'late', 'permission'),
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female'),
    allowNull: false
  },
  subjectName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'attendances',
  timestamps: false
});

/* ✅ Custom static method */
Attendance.getAll = async function () {
  return await Attendance.findAll({ raw: true });
};

export default Attendance;
