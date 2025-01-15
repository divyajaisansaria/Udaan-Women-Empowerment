import React, { useState } from 'react';
import './InventoryManagement.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function Inventory() {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [sum, setSum] = useState(0);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);
    const [companyName, setCompanyName] = useState('');  // New state for company name

    const Calculation = () => {
        // Add the new product to the list of products (users)
        const newUser = { name, quantity, price, sum };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        // Recalculate the total bill (sum of all product totals)
        const newTotal = updatedUsers.reduce((acc, user) => acc + user.sum, 0);
        setTotal(newTotal);  // Update the total with the new total

        // Reset fields after adding a product
        setSum(0);
        setPrice(0);
        setQuantity(0);
        setName('');
    };

    const handlePriceChange = (e) => {
        const newPrice = parseFloat(e.target.value);
        if (!isNaN(newPrice)) {
            setPrice(newPrice);
            calculateTotal(newPrice, quantity);
        }
    }

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity)) {
            setQuantity(newQuantity);
            calculateTotal(price, newQuantity);
        }
    }

    const calculateTotal = (price, quantity) => {
        const newTotal = price * quantity;
        setSum(newTotal);
    }

    const handleComplete = () => {
        // Reset all states to their initial values
        setUsers([]);     // Clear products list
        setTotal(0);      // Reset total bill
        setSum(0);        // Reset current product total
        setPrice(0);      // Reset price
        setQuantity(0);   // Reset quantity
        setName('');      // Reset product name
        setCompanyName(''); // Reset company name
    };

    const generateBill = () => {
        // Create the CSV content
        const header = `Company Name: ${companyName}\nProduct Name,Price,Quantity,Amount\n`; // Add company name to header
        const rows = users.map(user => `${user.name},${user.price},${user.quantity},${user.sum}`).join('\n'); // Product rows
        const csvContent = header + rows;

        // Create a Blob with the CSV content
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        // Create a download link
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Create an object URL for the Blob
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'bill.csv'); // Set the file name
            document.body.appendChild(link);
            link.click(); // Trigger download
            document.body.removeChild(link); // Clean up
        }
    };

    return (
        <div class="inventory-page">
            <NavBar />
            <div className="container fluid bg-2 text-center">
                <h1 className="text-center">Inventory Management</h1>
                <hr />

                <div className="row">
                    <div className="col-sm-8">
                        {/* Input field for company name */}
                        <div className="form-group">
                            <label htmlFor="companyName" className="font-lg mb-4">Company Name:</label>
                            <input
                                type="text"
                                className="form-control border-2"
                                id="companyName"
                                placeholder="Enter Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        <hr/>
                        <h3 align='left' className="add-products-divider mt-4 mb-2">Add Products</h3>
                        <table className="table table-bordered">
                            
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Product"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter price"
                                            value={price}
                                            onChange={handlePriceChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Quantity"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Total"
                                            value={sum}
                                            id="total_cost"
                                            name="total_cost"
                                            disabled
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={Calculation} type="submit">Add</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 align="left" className="add-products-divider mt-4 mb-2">Products</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Rendering the added products */}
                                {users.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.name}</td>
                                        <td>{row.price}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.sum}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-m-4">
                        <div className="form-group" align="left">
                            <h3>Total</h3>
                            <input type="text" className="form-control" placeholder="Enter Total" required disabled value={total}></input>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={handleComplete}>
                                <span>Refresh</span>
                            </button>
                            <br />
                            {/* Download Button: Calls generateBill to download the bill */}
                            <button type="button" className="btn btn-info" onClick={generateBill}>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default Inventory;
