import React, { useState, useEffect } from 'react';


const StudySession = () => {
  const [sessionData, setSessionData] = useState({
    topic: '',
    description: '',
    startTime: null,
    endTime: null,
    duration: null
  });
  const [sessionActive, setSessionActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); 

  const handleInputChange = (e) => {
    setSessionData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleStartSession = () => {
    setSessionData(prevState => ({
      ...prevState,
      startTime: new Date(),
      endTime: null,
      duration: null
    }));
    setSessionActive(true);
    setElapsedTime(0);
  };

  const handleEndSession = async () => {
    const endTime: Date = new Date();
    const durationInSeconds: number = Math.floor((endTime.getTime() - sessionData.startTime.getTime()) / 1000);
    const formattedDuration: string = formatTime(durationInSeconds);

    setSessionData(prevState => ({
      ...prevState,
      endTime: endTime,
      duration: formattedDuration
    }));
    setSessionActive(false);

    // POST request to save session data
    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch('/api/studySession', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          topic: sessionData.topic,
          description: sessionData.description,
          startTime: sessionData.startTime.toISOString(),
          endTime: endTime.toISOString(),
          duration: formattedDuration
        })
      });
      const data = await response.json();
      console.log('Save session result:', data);
      if (response.ok) {
        console.log('Session saved successfully');
      } else {
        throw new Error(data.message || 'Failed to save session');
      }
    } catch (error) {
      console.error('Failed to save the session:', error);
    }
  };

  const handleAddNewSession = () => {
    setSessionData({
      topic: '',
      description: '',
      startTime: null,
      endTime: null,
      duration: null
    });
    setSessionActive(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    let intervalId;
    if (sessionActive) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    } else {
      if (intervalId) clearInterval(intervalId);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [sessionActive]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Study Session Manager</h1>
      {!sessionActive ? (
        <div>
          <label>
            Topic:
            <input type="text" name="topic" value={sessionData.topic} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={sessionData.description} onChange={handleInputChange} />
          </label>
          <button onClick={handleStartSession}>Start Session</button>
        </div>
      ) : (
        <div>
          <h2>Session in progress</h2>
          <p>Topic: {sessionData.topic}</p>
          <p>Description: {sessionData.description}</p>
          <p>Elapsed Time: {formatTime(elapsedTime)}</p>
          <button onClick={handleEndSession}>End Session</button>
        </div>
      )}
      {sessionData.duration && (
        <div>
          <h3>Session Summary</h3>
          <p>Duration: {sessionData.duration}</p>
          <button onClick={handleAddNewSession}>Add New Session</button>
        </div>
      )}
    </div>
  );
};

export default StudySession;

