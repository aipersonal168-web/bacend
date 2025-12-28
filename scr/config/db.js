import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false,
    pool: {
      max: 5,        // maximum number of connections in pool
      min: 0,        // minimum number of connections
      acquire: 30000, // max time to get a connection (ms)
      idle: 10000     // release idle connection after 10s
    },
    dialectOptions: {
      connectTimeout: 30000, // 30 seconds
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
      keepAlive: true // enable TCP keep-alive
    },
    timezone: "+00:00" // set timezone once, avoid SET time_zone per query
  }
);

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();

export default db;
