import semester from '../models/semester.model.js';

/**
 * getSemester()
 * -------------------------
 * Meaning:
 * - Receive request from route
 * - Call model to get data
 * - Send response to client (JSON)
 */
export const getSemester = async (req, res) => {
    try {
        const data = await semester.findAll();
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




