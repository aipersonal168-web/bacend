import db from '../config/db.js';

/**
 * Year model
 * This function talks directly to the database
 */
const Year = {

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
            'SELECT * FROM years '
        );

        // Return data to controller
        return rows;
    }
};

export default Year;
