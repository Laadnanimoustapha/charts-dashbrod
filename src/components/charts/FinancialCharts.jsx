import React from 'react';
import { Bar } from 'react-chartjs-2';
import { colors, borderColors, commonOptions } from '../../utils/chartConfig';

const FinancialCharts = () => {
  // Candlestick Chart Data (simulated with bar chart)
  const candlestickData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Open',
      data: [30, 35, 32, 38, 36],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, {
      label: 'High',
      data: [40, 42, 38, 45, 42],
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }, {
      label: 'Low',
      data: [25, 30, 28, 32, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }, {
      label: 'Close',
      data: [38, 32, 35, 36, 40],
      backgroundColor: 'rgba(255, 206, 86, 0.7)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }]
  };

  // Histogram Data
  const histogramData = {
    labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70'],
    datasets: [{
      label: 'Frequency',
      data: [5, 10, 20, 35, 25, 15, 10],
      backgroundColor: colors[1],
      borderColor: borderColors[1],
      borderWidth: 1
    }]
  };

  const basicOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  const histogramOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Value Range'
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="chart-card-alt">
        <h3>Candlestick Chart</h3>
        <p>Shows open, high, low, and close prices for trading</p>
        <div className="chart-container">
          <Bar data={candlestickData} options={basicOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Histogram</h3>
        <p>Displays frequency distribution of data</p>
        <div className="chart-container">
          <Bar data={histogramData} options={histogramOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Coming Soon</h3>
        <p>More financial charts will be added</p>
        <div className="chart-container flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4 text-gray-400">📊</div>
            <p className="text-gray-500">More charts coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCharts;