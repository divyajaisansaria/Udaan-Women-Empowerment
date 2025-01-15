import React, { useState } from 'react';
import './Calculator.css';  // Include your CSS file
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AdvancedProfitMarginCalculator = () => {
  // State for form inputs
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [fixedCosts, setFixedCosts] = useState('');
  const [variableCosts, setVariableCosts] = useState('');
  const [discount, setDiscount] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [totalProfit, setTotalProfit] = useState(null);
  const [profitMargin, setProfitMargin] = useState(null);
  const [roi, setRoi] = useState(null);
  const [contributionMargin, setContributionMargin] = useState(null);
  const [finalProfitAfterTax, setFinalProfitAfterTax] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission and calculations
  const calculateProfitMargin = (e) => {
    e.preventDefault();

    // Parse inputs
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);
    const fixed = parseFloat(fixedCosts);
    const variable = parseFloat(variableCosts);
    const discountPercentage = parseFloat(discount) / 100;
    const tax = parseFloat(taxRate) / 100;

    // Validate inputs
    if (isNaN(cost) || isNaN(selling) || cost <= 0 || selling <= 0 || isNaN(fixed) || isNaN(variable)) {
      setErrorMessage('Please enter valid positive numbers for all fields.');
      return;
    }

    // Apply discount to selling price
    const discountedSellingPrice = selling * (1 - discountPercentage);

    // Calculate total cost (fixed + variable + cost)
    const totalCost = fixed + variable + cost;

    // Profit calculation
    const profit = discountedSellingPrice - totalCost;

    // Profit Margin calculation (Profit / Selling Price) * 100
    const margin = (profit / discountedSellingPrice) * 100;

    // Return on Investment (ROI) calculation: (Profit / (Cost Price + Fixed Costs + Variable Costs)) * 100
    const roiCalculation = (profit / (cost + fixed + variable)) * 100;

    // Contribution Margin calculation (Selling Price - Variable Costs) / Selling Price
    const contributionMarginCalculation = ((discountedSellingPrice - variable) / discountedSellingPrice) * 100;

    // Final Profit After Tax calculation (if applicable)
    const profitWithTax = tax > 0 ? profit * (1 - tax) : profit;

    // Set results
    setTotalProfit(profit.toFixed(2));
    setProfitMargin(margin.toFixed(2));
    setRoi(roiCalculation.toFixed(2));
    setContributionMargin(contributionMarginCalculation.toFixed(2));
    setFinalProfitAfterTax(profitWithTax.toFixed(2));
    setErrorMessage(''); // Clear any previous error messages
  };

  // Reset form
  const handleReset = () => {
    setCostPrice('');
    setSellingPrice('');
    setFixedCosts('');
    setVariableCosts('');
    setDiscount('');
    setTaxRate('');
    setTotalProfit(null);
    setProfitMargin(null);
    setRoi(null);
    setContributionMargin(null);
    setFinalProfitAfterTax(null);
    setErrorMessage('');
  };

  return (
    <div>
        <NavBar/>
    <div className="calculator-container">
      <h1>Profit Margin Calculator</h1>
      <form onSubmit={calculateProfitMargin} className="calculator-form">
        <div className="form-group">
          <label htmlFor="cost-price">Cost Price (₹):</label>
          <input
            type="number"
            id="cost-price"
            className="input-field"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selling-price">Selling Price (₹):</label>
          <input
            type="number"
            id="selling-price"
            className="input-field"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fixed-costs">Fixed Costs (₹):</label>
          <input
            type="number"
            id="fixed-costs"
            className="input-field"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="variable-costs">Variable Costs (₹):</label>
          <input
            type="number"
            id="variable-costs"
            className="input-field"
            value={variableCosts}
            onChange={(e) => setVariableCosts(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount (%) on Selling Price:</label>
          <input
            type="number"
            id="discount"
            className="input-field"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tax-rate">Tax Rate (%) (Optional):</label>
          <input
            type="number"
            id="tax-rate"
            className="input-field"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
        <button type="button" className="refresh-button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <div className="result-display">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {totalProfit !== null && !errorMessage && (
          <div>
            <h2>Results</h2>
            <p><strong>Total Profit (₹):</strong> {totalProfit}</p>
            <p><strong>Profit Margin (%):</strong> {profitMargin}%</p>
            <p><strong>ROI (%):</strong> {roi}%</p>
            <p><strong>Contribution Margin (%):</strong> {contributionMargin}%</p>
            {taxRate && (
              <p><strong>Final Profit After Tax (₹):</strong> {finalProfitAfterTax}</p>
            )}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AdvancedProfitMarginCalculator;
