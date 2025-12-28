import db from '../config/db.js';

/**
 * Year model
 * This function talks directly to the database
 */
const semesters = {

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
            'SELECT * FROM semesters '
        );

        // Return data to controller
        return rows;
    }
};

export default semesters;
