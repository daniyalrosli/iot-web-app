import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://yourserver.com/api/sensor');
      setSensorData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sensor data", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Athlete Health Monitoring Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sensorData.map((data, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Sensor {index + 1}</h2>
              <p><strong>Force:</strong> {data.force}</p>
              <p><strong>Temperature:</strong> {data.temperature} °C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
