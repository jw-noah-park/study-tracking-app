import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudyHistory = () => {
  const [studyHistory, setStudyHistory] = useState([]);

  useEffect(() => {
    async function fetchStudyHistory() {
      try {
        const response = await axios.get('/api/studyHistory');
        setStudyHistory(response.data);
      } catch (error) {
        console.error('Failed to fetch study history:', error);
      }
    }
    fetchStudyHistory();
  }, []);

  return (
    <div>
      <h1>Study History</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Session ID</th>
            <th>Date</th>
            <th>Total Duration</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {studyHistory.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.user_id}</td>
              <td>{record.session_id}</td>
              <td>{record.date}</td>
              <td>{record.total_duration}</td>
              <td>{record.start_time}</td>
              <td>{record.end_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyHistory;
