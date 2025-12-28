import db from '../config/db.js';

/**
 * Year model
 * This function talks directly to the database
 */
const rooms = {

    /**
     * findAll()
     * -------------------------
     * Meaning:
     * Get all active years from the database
     * Used by controller
     */
    findAll: async () => {
        // Run SQL query
        const [rows] = await db.query(
            'SELECT * FROM rooms '
        );
        // console.log(rows);
        // Return data to controller
        return rows;
    }
};

export default rooms;
