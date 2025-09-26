import React from 'react';
import SectionTitle from './components/SectionTitle';
import BasicCharts from './components/charts/BasicCharts';
import AdvancedCharts from './components/charts/AdvancedCharts';
import FinancialCharts from './components/charts/FinancialCharts';
import SpecialCharts from './components/charts/SpecialCharts';
import RealTimeCharts from './components/charts/RealTimeCharts';

function App() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="app-header">
          <h1 className="app-title">Chart Dashboard</h1>
          <p className="app-subtitle">
            Clean and intuitive data visualization with interactive charts. 
            Explore different chart types to better understand your data.
          </p>
        </header>

        {/* Basic Charts Section */}
        <section className="mb-16">
          <SectionTitle title="Basic Charts" />
          <div className="chart-grid">
            <BasicCharts />
          </div>
        </section>

        {/* Advanced Charts Section */}
        <section className="mb-16">
          <SectionTitle title="Advanced Charts" />
          <div className="chart-grid">
            <AdvancedCharts />
          </div>
        </section>

        {/* Financial & Statistical Charts Section */}
        <section className="mb-16">
          <SectionTitle title="Financial Charts" />
          <div className="chart-grid">
            <FinancialCharts />
          </div>
        </section>

        {/* Special/Custom Charts Section */}
        <section className="mb-16">
          <SectionTitle title="Special Charts" />
          <div className="chart-grid">
            <SpecialCharts />
          </div>
        </section>

        {/* Real-Time Charts Section */}
        <section className="mb-16">
          <SectionTitle title="Interactive Charts" />
          <div className="chart-grid">
            <RealTimeCharts />
          </div>
        </section>

        <footer className="app-footer">
          <p>Chart Dashboard - Built with Chart.js & React-</p>
          <p>Clean Data Visualization © 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default App;