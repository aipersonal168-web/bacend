import db from '../config/db.js';

/**
 * shift model
 * This function talks directly to the database
 */
const shift = {

    /**
     * findAll()
     * -------------------------
     * Meaning:
     * Get all activeshifts from the database
     * Used by controller
     */
    findAll: async () => {
        // Run SQL query
        const [rows] = await db.query(
            'SELECT * FROM shifts '
        );

        // Return data to controller
        return rows;
    }
};

export default shift;
