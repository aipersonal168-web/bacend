import Year from '../models/year.model.js'; // make sure path is correct

export const getYears = async (req, res) => {
    try {
        const data = await Year.findAll();
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
