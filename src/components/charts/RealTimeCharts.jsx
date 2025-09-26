import React, { useState, useEffect, useRef } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { colors, borderColors, commonOptions } from '../../utils/chartConfig';

const RealTimeCharts = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingData, setStreamingData] = useState(Array(20).fill(0));
  const [dynamicBarData, setDynamicBarData] = useState([10, 20, 30, 40, 50]);
  const intervalRef = useRef(null);

  // Streaming Line Chart Data
  const streamingChartData = {
    labels: Array(20).fill(''),
    datasets: [{
      label: 'Real-time Data',
      data: streamingData,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.1,
      fill: false
    }]
  };

  // Dynamic Bar Chart Data
  const dynamicBarChartData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Dynamic Data',
      data: dynamicBarData,
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }]
  };

  const startStreaming = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsStreaming(true);
    
    intervalRef.current = setInterval(() => {
      setStreamingData(prevData => {
        const newData = [...prevData];
        newData.shift();
        newData.push(Math.random() * 20 - 10); // Random value between -10 and 10
        return newData;
      });
    }, 500);
  };

  const stopStreaming = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsStreaming(false);
  };

  const updateDynamicData = () => {
    const newData = dynamicBarData.map(() => Math.floor(Math.random() * 100));
    setDynamicBarData(newData);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const streamingOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: -10,
        max: 10
      },
      x: {
        display: false
      }
    },
    animation: {
      duration: 0 // Disable animation for real-time updates
    }
  };

  const dynamicBarOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    animation: {
      duration: 1000
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="chart-card-alt">
        <h3>Streaming Line Chart</h3>
        <p>Real-time data updates with live streaming</p>
        <div className="chart-container">
          <Line data={streamingChartData} options={streamingOptions} />
        </div>
        <div className="mt-4 flex justify-center space-x-3">
          <button
            onClick={startStreaming}
            disabled={isStreaming}
            className={`px-4 py-2 rounded-lg transition-all update-btn focus:outline-none ${
              isStreaming 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isStreaming ? 'Streaming...' : 'Start'}
          </button>
          <button
            onClick={stopStreaming}
            disabled={!isStreaming}
            className={`px-4 py-2 rounded-lg transition-all update-btn focus:outline-none ${
              !isStreaming 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            Stop
          </button>
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Dynamic Bar Chart</h3>
        <p>Interactive chart with animated data updates</p>
        <div className="chart-container">
          <Bar data={dynamicBarChartData} options={dynamicBarOptions} />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={updateDynamicData}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all update-btn focus:outline-none"
          >
            Update Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeCharts;