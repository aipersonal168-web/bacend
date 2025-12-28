import Room from '../models/room.model.js';


/**
 * getRoom()
 * -------------------------
 * Meaning:
 * - Receive request from route
 * - Call model to get data
 * - Send response to client (JSON)
 */
export const getRoom = async (req, res) => {
    try {
        const data = await Room.findAll();
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