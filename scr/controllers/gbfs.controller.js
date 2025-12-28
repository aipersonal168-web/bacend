// src/controllers/gbfs.controller.js
import Attendance from '../models/attendance.js';

/* Build Graph */
function buildGraph(data) {
  const graph = {};

  data.forEach(r => {
    if (!graph[r.student_id]) {
      graph[r.student_id] = {
        id: r.student_id,
        name: r.student_name,
        absent: 0,
        late: 0,
        riskScore: 0,
        status: "NORMAL",
        prediction: "Safe"
      };
    }

    if (r.status === 'absent') graph[r.student_id].absent++;
    if (r.status === 'late') graph[r.student_id].late++;
  });

  Object.values(graph).forEach(n => {
    n.riskScore = (n.absent * 2) + (n.late * 1);

    if (n.absent >= 3) {
      n.status = "DROP";
      n.prediction = "Likely to drop attendance";
    } else if (n.absent == 2) {
      n.status = "WARNING";
      n.prediction = "High risk in near future";
    }
  });

  return graph;
}

/* GBFS */
function greedyBestFirstSearch(graph) {
  return Object.values(graph)
    .filter(n => n.status !== "NORMAL")
    .sort((a, b) => b.riskScore - a.riskScore);
}

/* API */
export const predictDropAttendance = async (req, res) => {
  try {
    const data = await Attendance.findAll({
      attributes: ['student_id', 'student_name', 'status']
    });

    const graph = buildGraph(data);
    const result = greedyBestFirstSearch(graph);

    res.json({
      ai: "Greedy Best-First Search",
      total: result.length,
      result
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
