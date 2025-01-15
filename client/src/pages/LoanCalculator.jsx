import React, { useState, useRef } from 'react';
import Navbar from '../components/NavBar';
import './Calculator.css';
import Footer from '../components/Footer';
const LoanCalculator = () => {
  // State for input fields and results
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalBorrowingCost, setTotalBorrowingCost] = useState(null);
  const [avgMonthlyInterest, setAvgMonthlyInterest] = useState(null);
  const [years, setYears] = useState(null);

  // Refs for the input fields
  const carPriceRef = useRef(null);
  const downPaymentRef = useRef(null);
  const loanTermRef = useRef(null);
  const interestRateRef = useRef(null);

  // Function to handle form submission and calculate the loan
  const calculateLoan = (e) => {
    e.preventDefault();

    const carPrice = parseFloat(carPriceRef.current.value);
    const downPayment = parseFloat(downPaymentRef.current.value);
    const loanTerm = parseFloat(loanTermRef.current.value) * 12; // Convert years to months
    const interestRate = parseFloat(interestRateRef.current.value) / 100 / 12; // Convert annual rate to monthly rate

    // Validate inputs
    if (isNaN(carPrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) || 
        carPrice <= 0 || downPayment < 0 || loanTerm <= 0 || interestRate < 0) {
      setErrorMessage('Please enter valid positive numbers for all fields.');
      setMonthlyPayment(null);
      setTotalInterest(null);
      setTotalBorrowingCost(null);
      setAvgMonthlyInterest(null);
      return;
    }

    // Calculate loan amount
    const loanAmount = carPrice - downPayment;

    // Calculate monthly payment using fixed-rate loan formula
    const monthlyPaymentResult = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Calculate average monthly interest
    const avgInterest = loanAmount * interestRate;

    // Calculate total interest
    const totalInterestResult = (monthlyPaymentResult * loanTerm) - loanAmount;

    // Calculate total borrowing cost
    const totalBorrowingCostResult = loanAmount + totalInterestResult;

    // Set the results
    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
    setAvgMonthlyInterest(avgInterest.toFixed(2));
    setTotalInterest(totalInterestResult.toFixed(2));
    setTotalBorrowingCost(totalBorrowingCostResult.toFixed(2));
    setYears((loanTerm / 12).toFixed(2)); // Convert months to years
    setErrorMessage(''); // Clear any previous error messages
  };

  // Function to handle the refresh/reset of the form and results
  const handleRefresh = () => {
    setMonthlyPayment(null);
    setTotalInterest(null);
    setTotalBorrowingCost(null);
    setAvgMonthlyInterest(null);
    setYears(null);
    setErrorMessage('');
    
    // Reset the input fields
    carPriceRef.current.value = '';
    downPaymentRef.current.value = '';
    loanTermRef.current.value = '';
    interestRateRef.current.value = '';
  };

  return (
    <div>
      <Navbar />
    
      <div className="calculator-container">
        <h1>Auto Loan Calculator</h1>
        <form onSubmit={calculateLoan} className="calculator-form">
          <div className="form-group">
            <label htmlFor="car-price">Loan Amount (₹):</label>
            <input
              type="number"
              id="car-price"
              className="input-field"
              ref={carPriceRef}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="down-payment">Down Payment (₹):</label>
            <input
              type="number"
              id="down-payment"
              className="input-field"
              ref={downPaymentRef}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loan-term">Loan Term (years):</label>
            <input
              type="number"
              id="loan-term"
              className="input-field"
              ref={loanTermRef}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interest-rate">Interest Rate (%):</label>
            <input
              type="number"
              id="interest-rate"
              className="input-field"
              step="0.1"
              ref={interestRateRef}
              required
            />
          </div>
          <button type="submit" className="calculate-button">
            Calculate
          </button>
        </form>

        {errorMessage && (
          <div id="result" className="result-display">
            <h2>{errorMessage}</h2>
          </div>
        )}

        {monthlyPayment && !errorMessage && (
          <div id="result" className="result-display">
            <h2>Results</h2>
            <p>Monthly Payment: ₹{monthlyPayment}</p>
            <p>Average Monthly Interest: ₹{avgMonthlyInterest}</p>
            <p>Total Interest: ₹{totalInterest}</p>
            <p>Loan Term: {years} years</p>
            <p>Total Borrowing Cost: ₹{totalBorrowingCost}</p>
          </div>
        )}

        {/* Refresh Button */}
        <button type="button" className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default LoanCalculator;
