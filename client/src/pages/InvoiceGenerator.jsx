import React, { useState } from 'react';
import './InvoiceGenerator.css';  // Include your CSS file
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const InvoiceGenerator = () => {
  const [companyName, setCompanyName] = useState('');
  const [clientName, setClientName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceNumber] = useState(Math.floor(Math.random() * 100000)); // Random invoice number
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
  const [taxRate, setTaxRate] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const [currency, setCurrency] = useState('₹');
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateInvoice = () => {
    if (!companyName || !clientName || !invoiceDate) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }
  
    // Calculate the total immediately
    let calculatedTotal = 0;
    items.forEach(item => {
      calculatedTotal += item.quantity * item.price;
    });
  
    if (calculatedTotal <= 0) {
      setErrorMessage('Invalid item details. Please check quantities and prices.');
      return;
    }
  
    // If no errors, update totalAmount state
    setTotalAmount(calculatedTotal);
    setErrorMessage('');
  };
  


  const applyTaxAndDiscount = () => {
    let finalTotal = totalAmount;
    
    // Apply discount
    if (discountRate > 0) {
      finalTotal -= finalTotal * (discountRate / 100);
    }

    // Apply tax
    if (taxRate > 0) {
      finalTotal += finalTotal * (taxRate / 100);
    }

    return finalTotal;
  };

  // Function to download the invoice as a CSV file
  const downloadInvoice = () => {
    // Prepare the data to be exported to CSV
    const headers = ['Item', 'Quantity', 'Price', 'Total'];
    const rows = items.map(item => [
      item.name,
      item.quantity,
      item.price.toFixed(2),
      (item.quantity * item.price).toFixed(2)
    ]);

    // Add subtotal, discount, tax, and final total to the CSV
    const totalRows = [
      ['Subtotal', '', '', `${currency}${totalAmount.toFixed(2)}`],
      discountRate > 0 ? [`Discount (${discountRate}%)`, '', '', `${currency}${(totalAmount * (discountRate / 100)).toFixed(2)}`] : null,
      taxRate > 0 ? [`Tax (${taxRate}%)`, '', '', `${currency}${(totalAmount * (taxRate / 100)).toFixed(2)}`] : null,
      ['Total', '', '', `${currency}${applyTaxAndDiscount().toFixed(2)}`]
    ].filter(row => row !== null);

    // Combine all rows for CSV data
    const csvData = [headers, ...rows, ...totalRows];
    
    // Convert CSV array to string format
    const csvContent = csvData.map(row => row.join(',')).join('\n');

    // Create a Blob object for the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create an anchor element for downloading the CSV file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `invoice_${invoiceNumber}.csv`;

    // Trigger the download
    link.click();
  };

  // Refresh/Reset Button functionality
  const refreshForm = () => {
    setCompanyName('');
    setClientName('');
    setInvoiceDate('');
    setItems([{ name: '', quantity: 1, price: 0 }]);
    setTaxRate(0);
    setDiscountRate(0);
    setCurrency('₹');
    setTotalAmount(0);
    setErrorMessage('');
  };

  return (
    <div>
        <NavBar/>
    <div className="invoice-generator-container">
      <h1>Invoice Generator</h1>
      
      <div className="form-group">
        <label htmlFor="company-name">Company Name:</label>
        <input
          type="text"
          id="company-name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="client-name">Client Name:</label>
        <input
          type="text"
          id="client-name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="invoice-date">Invoice Date:</label>
        <input
          type="date"
          id="invoice-date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
          required
        />
      </div>

      <h2>Items</h2>
      {items.map((item, index) => (
        <div key={index} className="item">
          <input
            type="text"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            className="item-input"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
            className="item-input"
            min="1"
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
            className="item-input"
            min="0"
          />
          <button type="button" onClick={() => removeItem(index)} className="remove-item-button">
            Remove
          </button>
        </div>
      ))}
      
      <button type="button" onClick={addItem} className="add-item-button">Add Item</button>
      
      <div className="form-group">
        <label htmlFor="tax-rate">Tax Rate (%):</label>
        <input
          type="number"
          id="tax-rate"
          value={taxRate}
          onChange={(e) => setTaxRate(parseFloat(e.target.value))}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="discount-rate">Discount Rate (%):</label>
        <input
          type="number"
          id="discount-rate"
          value={discountRate}
          onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="₹">₹</option>
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="total">
        <h3>Subtotal: {currency}{totalAmount.toFixed(2)}</h3>
        <h3>Total: {currency}{applyTaxAndDiscount().toFixed(2)}</h3>
      </div>

      <div className="actions">
        <button type="button" onClick={calculateInvoice} className="calculate-button">Calculate</button>
        <button type="button" onClick={downloadInvoice} className="download-button">Download Invoice</button>
        <button type="button" onClick={refreshForm} className="refresh-button">Refresh</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default InvoiceGenerator;
