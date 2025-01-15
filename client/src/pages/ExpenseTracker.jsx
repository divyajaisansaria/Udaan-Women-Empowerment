import React, { useState } from 'react';
import './ExpenseTracker.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ExpenseTracker = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Categories list
  const categories = ['Food', 'Bills', 'Entertainment', 'Transportation', 'Others'];

  // Handle adding an expense
  const handleAddExpense = () => {
    if (expenseName && expenseAmount && expenseCategory) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        category: expenseCategory,
      };

      // Add the new expense to the list
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);

      // Update total expenses
      setTotalExpenses(updatedExpenses.reduce((acc, expense) => acc + expense.amount, 0));

      // Clear input fields
      setExpenseName('');
      setExpenseAmount('');
      setExpenseCategory('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Handle deleting an expense
  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);

    // Recalculate total expenses
    setTotalExpenses(updatedExpenses.reduce((acc, expense) => acc + expense.amount, 0));
  };

  // Handle resetting the form and clearing all expenses
  const handleReset = () => {
    setExpenseName('');
    setExpenseAmount('');
    setExpenseCategory('');
    setExpenses([]);
    setTotalExpenses(0);
  };

  // Convert expenses to CSV format
  const downloadCSV = () => {
    const header = ['Name', 'Amount (₹)', 'Category'];
    const rows = expenses.map(expense => [expense.name, expense.amount, expense.category]);

    // Create CSV content
    const csvContent = [header, ...rows]
      .map(row => row.join(','))
      .join('\n');

    // Create a Blob from the CSV string
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'expenses.csv'; // Set the default download filename
    link.click(); // Trigger the download
  };

  // Convert expenses to JSON format
  const downloadJSON = () => {
    const jsonContent = JSON.stringify(expenses, null, 2);

    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'expenses.json'; // Set the default download filename
    link.click(); // Trigger the download
  };

  return (
    <div>
        <NavBar/>
    <div className="expense-tracker-container" >
      <h1>Expense Tracker</h1>
      
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <select value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <div className="expenses-list">
        <h2>Expenses</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (₹)</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button onClick={() => handleDeleteExpense(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-expenses">
        <h3>Total Expenses: ₹{totalExpenses.toFixed(2)}</h3>
      </div>

      {/* Refresh Button */}
      <div className="refresh-btn-container">
        <button onClick={handleReset} className="refresh-button">Refresh</button>
      </div>

      {/* Download Buttons */}
      <div className="download-buttons">
        <button onClick={downloadCSV} className="download-button">Download</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ExpenseTracker;
