import React, { useState } from 'react';
import './Calculator.css';  // Include your CSS file
import Navbar from '../components/NavBar';  // Import Navbar component
import Footer from '../components/Footer';
const SavingsGoalCalculator = () => {
  // State to store form inputs
  const [goalAmount, setGoalAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [result, setResult] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse inputs
    const goal = parseFloat(goalAmount);
    const contribution = parseFloat(monthlyContribution);
    const target = new Date(targetDate);

    if (isNaN(goal) || isNaN(contribution) || goal <= 0 || contribution <= 0) {
      setResult('Please enter valid positive numbers for goal amount and monthly contribution.');
      return;
    }

    const today = new Date();
    const months = Math.ceil((target - today) / (1000 * 60 * 60 * 24 * 30));

    if (months <= 0) {
      setResult('Target date must be in the future.');
      return;
    }

    // Calculate total saved and additional amount needed
    const totalSaved = contribution * months;
    const additionalAmountNeeded = goal - totalSaved;

    // Display results
    setResult(`
      Total Saved: ₹${totalSaved.toFixed(2)}
      Additional Amount Needed: ₹${additionalAmountNeeded.toFixed(2)}
    `);
  };

  // Reset the form
  const handleReset = () => {
    setGoalAmount('');
    setTargetDate('');
    setMonthlyContribution('');
    setResult('');
  };

  return (
    <div>
        <Navbar/>
   
    <div className="calculator-container">
      <h1>Savings Goal Calculator</h1>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="goal-amount">Goal Amount (₹):</label>
          <input
            type="number"
            id="goal-amount"
            className="input-field"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="target-date">Target Date:</label>
          <input
            type="date"
            id="target-date"
            className="input-field"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="monthly-contribution">Monthly Contribution (₹):</label>
          <input
            type="number"
            id="monthly-contribution"
            className="input-field"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            required
          />

        </div>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
        <button type="button" className="refresh-button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <div id="result" className="result-display">
        {result && (
          <>
            <h2>Results</h2>
            <p>{result}</p>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SavingsGoalCalculator;
