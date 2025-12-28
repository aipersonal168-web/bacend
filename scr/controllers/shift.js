import shift from '../models/shift.model.js';


/**
 * getSemester()
 * -------------------------
 * Meaning:
 * - Receive request from route
 * - Call model to get data
 * - Send response to client (JSON)
 */
export const getShift = async (req, res) => {
    try {
        const data = await shift.findAll();
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




