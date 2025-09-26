// Clean chart configuration
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const colors = [
  'rgba(59, 130, 246, 0.8)',   // Blue
  'rgba(16, 185, 129, 0.8)',   // Green
  'rgba(245, 101, 101, 0.8)',  // Red
  'rgba(139, 92, 246, 0.8)',   // Purple
  'rgba(251, 191, 36, 0.8)',   // Yellow
  'rgba(236, 72, 153, 0.8)'    // Pink
];

export const borderColors = [
  'rgb(59, 130, 246)',
  'rgb(16, 185, 129)',
  'rgb(245, 101, 101)',
  'rgb(139, 92, 246)',
  'rgb(251, 191, 36)',
  'rgb(236, 72, 153)'
];

export const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 800,
    easing: 'easeOutCubic'
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
          family: 'Inter'
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 11,
          family: 'Inter'
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        font: {
          size: 11,
          family: 'Inter'
        }
      }
    }
  }
};