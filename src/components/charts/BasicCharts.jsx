import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, Bubble, Scatter } from 'react-chartjs-2';
import ChartCard from '../ChartCard';
import { months, colors, borderColors, commonOptions } from '../../utils/chartConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BasicCharts = () => {
  // Line Chart Data
  const lineData = {
    labels: months,
    datasets: [{
      label: 'Sales 2023',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: borderColors[0],
      borderWidth: 2,
      tension: 0.3,
      fill: false
    }]
  };

  // Bar Chart Data
  const barData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2],
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }]
  };

  // Column Chart Data
  const columnData = {
    labels: months,
    datasets: [{
      label: 'Revenue',
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: colors[1],
      borderColor: borderColors[1],
      borderWidth: 1
    }]
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      data: [30, 20, 15, 25, 10],
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }]
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1
    }]
  };

  // Area Chart Data
  const areaData = {
    labels: months,
    datasets: [{
      label: 'Website Traffic',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: borderColors[1],
      borderWidth: 2,
      tension: 0.1,
      fill: true
    }]
  };

  // Radar Chart Data
  const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
      label: 'Person A',
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: borderColors[0],
      borderWidth: 2
    }, {
      label: 'Person B',
      data: [28, 48, 40, 19, 96, 27, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: borderColors[1],
      borderWidth: 2
    }]
  };

  // Bubble Chart Data
  const bubbleData = {
    datasets: [{
      label: 'Dataset 1',
      data: [
        {x: 20, y: 30, r: 15},
        {x: 40, y: 10, r: 10},
        {x: 30, y: 20, r: 20},
        {x: 50, y: 40, r: 25},
        {x: 70, y: 30, r: 15},
        {x: 60, y: 50, r: 10}
      ],
      backgroundColor: colors[0],
      borderColor: borderColors[0],
      borderWidth: 1
    }, {
      label: 'Dataset 2',
      data: [
        {x: 10, y: 50, r: 10},
        {x: 30, y: 30, r: 15},
        {x: 40, y: 60, r: 20},
        {x: 20, y: 70, r: 10},
        {x: 50, y: 20, r: 15},
        {x: 70, y: 50, r: 20}
      ],
      backgroundColor: colors[1],
      borderColor: borderColors[1],
      borderWidth: 1
    }]
  };

  // Scatter Chart Data
  const scatterData = {
    datasets: [{
      label: 'Dataset 1',
      data: [
        {x: 10, y: 20},
        {x: 15, y: 25},
        {x: 20, y: 30},
        {x: 25, y: 40},
        {x: 30, y: 50},
        {x: 35, y: 45},
        {x: 40, y: 60}
      ],
      backgroundColor: colors[0],
      borderColor: borderColors[0],
      borderWidth: 1
    }, {
      label: 'Dataset 2',
      data: [
        {x: 20, y: 10},
        {x: 25, y: 15},
        {x: 30, y: 20},
        {x: 35, y: 30},
        {x: 40, y: 40},
        {x: 45, y: 35},
        {x: 50, y: 50}
      ],
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
        beginAtZero: true
      }
    }
  };

  const pieOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };

  const doughnutOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        position: 'right',
      }
    },
    cutout: '70%'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ChartCard title="Line Chart" description="Shows trends and changes over time">
        <Line data={lineData} options={basicOptions} />
      </ChartCard>

      <div className="chart-card-alt">
        <h3>Bar Chart</h3>
        <p>Compare quantities across different categories</p>
        <div className="chart-container">
          <Bar data={barData} options={{...basicOptions, plugins: { legend: { display: false } }}} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Column Chart</h3>
        <p>Vertical bars for easy comparison of values</p>
        <div className="chart-container">
          <Bar data={columnData} options={{...basicOptions, plugins: { legend: { display: false } }}} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Pie Chart</h3>
        <p>Shows parts of a whole as percentages</p>
        <div className="chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Doughnut Chart</h3>
        <p>Pie chart with a hollow center for better readability</p>
        <div className="chart-container">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Area Chart</h3>
        <p>Line chart with filled area underneath</p>
        <div className="chart-container">
          <Line data={areaData} options={basicOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Radar Chart</h3>
        <p>Compare multiple variables on a circular grid</p>
        <div className="chart-container">
          <Radar data={radarData} options={commonOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Bubble Chart</h3>
        <p>Three-dimensional data with x, y, and size values</p>
        <div className="chart-container">
          <Bubble data={bubbleData} options={basicOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Scatter Plot</h3>
        <p>Shows correlation between two variables</p>
        <div className="chart-container">
          <Scatter data={scatterData} options={basicOptions} />
        </div>
      </div>
    </div>
  );
};

export default BasicCharts;