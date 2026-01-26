import React, { useEffect, useState } from 'react';
import District from './components/District';

const App = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    const fetchTrafficData = async () => {
      const response = await fetch('/api/traffic');
      const data = await response.json();
      setTrafficData(data);
    };

    fetchTrafficData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Traffic Data by District</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trafficData.map((district) => (
          <District key={district.id} district={district} />
        ))}
      </div>
    </div>
  );
};

export default App;