// src/pages/Tools.js
import React from 'react';
import NavBar from '../components/NavBar';
import { assets } from '../Asset/assets/assets'; // Ensure correct path
import './Tools.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Tools = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Array of calculator names and paths
  const calculators = [
    { name: 'Loan Calculator', path: '/LoanCalculator' },
    { name: 'Savings Calculator', path: '/SavingCalculator' },
    { name: 'Profit-Margin Calculator', path: '/profit-margin-calculator' },
    { name: 'Inventory Management', path: '/Inventory' },
    { name: 'Expense Tracker', path: '/ExpenseTracker' },
   { name: 'Invoice Generator', path: '/invoice-generator' },
   { name: 'Instant Help', path: 'https://bot.dialogflow.com/e403623e-b7d3-4d89-95b2-c470257e3df4'}
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* First Section with Full Height Background Image */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${assets.bg_tools})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full viewport height
        }}
      >
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-gray-600">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Need free tools to grow
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            your business?
          </h1>
          <button
            onClick={scrollToContent}
            className="bg-[#ff4040] text-white p-4 rounded-full hover:bg-[#e33838] transition duration-300"
          >
            Scroll down
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div id="content-section" className="flex-grow my-20 mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mapping over the array of calculators */}
          {calculators.map((calculator, index) => (
            <div
              key={index}
              className="border p-6 shadow rounded-lg flex items-center justify-center h-40 hover:shadow-lg transition duration-300"
            >
              <Link to={calculator.path} className="text-3xl font-medium cursor-pointer">
                {calculator.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
