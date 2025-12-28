import { DataTypes } from "sequelize";
import db from "../config/db.js";

// 1️⃣ Define the model first
export const User = db.define("User", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  pass: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  images: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: "users",
  timestamps: true,
});

// 2️⃣ Define any helper functions AFTER the model
export async function findUserByname(name,role) {
  try {
  const user = await User.findOne({
  where: { name, role }
});
    return user || null;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
}
