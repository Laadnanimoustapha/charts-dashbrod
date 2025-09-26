import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import WordCloud from '../WordCloud';
import { colors, borderColors, commonOptions } from '../../utils/chartConfig';

const SpecialCharts = () => {
  // Funnel Chart Data (simulated with bar chart)
  const funnelData = {
    labels: ['Visits', 'Add to Cart', 'Checkout', 'Purchase'],
    datasets: [{
      label: 'Conversion Funnel',
      data: [1000, 500, 200, 100],
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }]
  };

  // Gauge Chart Data (simulated with doughnut chart)
  const gaugeData = {
    labels: ['Score', 'Remaining'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(200, 200, 200, 0.3)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(200, 200, 200, 0.5)'],
      borderWidth: 1,
      circumference: 180,
      rotation: 270
    }]
  };

  const funnelOptions = {
    ...commonOptions,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  const gaugeOptions = {
    ...commonOptions,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="chart-card-alt">
        <h3>Funnel Chart</h3>
        <p>Shows conversion rates through process stages</p>
        <div className="chart-container">
          <Bar data={funnelData} options={funnelOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Gauge Chart</h3>
        <p>Displays progress or performance as a meter</p>
        <div className="chart-container relative">
          <Doughnut data={gaugeData} options={gaugeOptions} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-gray-700">75%</span>
          </div>
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Word Cloud</h3>
        <p>Visual representation of text data by frequency</p>
        <div className="chart-container flex items-center justify-center">
          <WordCloud />
        </div>
      </div>
    </div>
  );
};

export default SpecialCharts;