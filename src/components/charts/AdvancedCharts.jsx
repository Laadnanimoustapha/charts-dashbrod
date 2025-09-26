import React from 'react';
import { months, colors, borderColors, commonOptions } from '../../utils/chartConfig';

const AdvancedCharts = () => {
  // Combo Chart Data
  const comboData = {
    labels: months,
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: colors[0],
      borderColor: borderColors[0],
      borderWidth: 1
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [30, 50, 25, 65, 45, 75, 40],
      backgroundColor: colors[1],
      borderColor: borderColors[1],
      borderWidth: 2,
      tension: 0.3,
      fill: false
    }]
  };

  // Stacked Bar Chart Data
  const stackedBarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Product A',
      data: [30, 40, 20, 50],
      backgroundColor: colors[0],
      borderColor: borderColors[0],
      borderWidth: 1
    }, {
      label: 'Product B',
      data: [20, 30, 15, 40],
      backgroundColor: colors[1],
      borderColor: borderColors[1],
      borderWidth: 1
    }, {
      label: 'Product C',
      data: [10, 20, 10, 30],
      backgroundColor: colors[2],
      borderColor: borderColors[2],
      borderWidth: 1
    }]
  };

  // Polar Area Chart Data
  const polarAreaData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
      data: [11, 16, 7, 3, 14],
      backgroundColor: colors,
      borderColor: borderColors,
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

  const stackedOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  };

  const polarOptions = {
    ...commonOptions,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="chart-card-alt">
        <h3>Combo Chart</h3>
        <p>Combines different chart types in one visualization</p>
        <div className="chart-container">
          <Bar data={comboData} options={basicOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Stacked Bar Chart</h3>
        <p>Shows parts of a whole across categories</p>
        <div className="chart-container">
          <Bar data={stackedBarData} options={stackedOptions} />
        </div>
      </div>

      <div className="chart-card-alt">
        <h3>Polar Area Chart</h3>
        <p>Circular chart similar to pie chart with variable radius</p>
        <div className="chart-container">
          <PolarArea data={polarAreaData} options={polarOptions} />
        </div>
      </div>
    </div>
  );
};


export default AdvancedCharts;
