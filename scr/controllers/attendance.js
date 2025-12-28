import Attendance from '../models/attendance.js';

// Get all attendance
export const getAllAttendance = async (req, res) => {
    const result = await Attendance.findAll();
    if (result.success) res.json(result);
    else res.status(500).json(result);
};


export const storeAttendance = async (req, res) => {
  try {
    const {
      year_id,
      semester_id,
      shift_id,
      room_id,
      week,
      attendance
    } = req.body;

    // 1️⃣ Count existing students in this room
    const existingCount = await Attendance.count({
      where: {
        yearId: year_id,
        semesterId: semester_id,
        shiftId: shift_id,
        room_id: room_id
      }
    });

    const incomingCount = attendance.length;
    console.log(incomingCount);
    // 2️⃣ Check limit 30
    if (existingCount + incomingCount > 30) {
      return res.status(400).json({
        message: `Room already has ${existingCount} students. You can add only ${30 - existingCount} more.`
      });
    }

    // 3️⃣ Prepare records
    const records = attendance.map(item => ({
      student_id: item.student_id,
      student_name: item.student_name,
      teacher_name: item.teacher_name,
      status: item.status,
      gender: item.gender,
      subjectName: item.subjectName,

      yearId: year_id,
      semesterId: semester_id,
      shiftId: shift_id,
      room_id: room_id,
      week: week
    }));

    // 4️⃣ Insert
    await Attendance.bulkCreate(records);

    res.json({
      message: "Attendance saved successfully",
      totalInserted: records.length
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
