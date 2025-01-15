import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const FormPage = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessDetails, setBusinessDetails] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [businessStart, setBusinessStart] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [sellProducts, setSellProducts] = useState(false);
  const [productDetails, setProductDetails] = useState([{ name: '', price: '', quantity: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('businessName', businessName);
    formData.append('businessDetails', businessDetails);
    formData.append('ownerName', ownerName);
    formData.append('businessStart', businessStart);
    formData.append('contactNo', contactNo);
    formData.append('email', email);
    formData.append('sellProducts', sellProducts);
    if (sellProducts) {
      productDetails.forEach((product, index) => {
        formData.append(`productDetails[${index}][name]`, product.name);
        formData.append(`productDetails[${index}][price]`, product.price);
        formData.append(`productDetails[${index}][quantity]`, product.quantity);
      });
    }

    try {
      const response = await axios.post('http://localhost:5000/add-business', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Form submitted successfully!');
      console.log(response.data); // Log the response
    } catch (err) {
      console.error('Error submitting form:', err);
    }

    setBusinessName('');
    setBusinessDetails('');
    setOwnerName('');
    setBusinessStart('');
    setContactNo('');
    setEmail('');
    setSellProducts(false);
    setProductDetails([{ name: '', price: '', quantity: '' }]);
  };

  const handleAddProductDetail = () => {
    setProductDetails([...productDetails, { name: '', price: '', quantity: '' }]);
  };

  const handleProductDetailChange = (index, key, value) => {
    const newProductDetails = [...productDetails];
    newProductDetails[index][key] = value;
    setProductDetails(newProductDetails);
  };

  return (
    <div>
      <NavBar/>
    
    <div className="container mx-auto p-4 bg-[#FFF0ED] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add Your Business</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
        <div>
          <label className="block text-lg font-medium text-gray-800">Business Name</label>
          <input 
            type="text" 
            value={businessName} 
            onChange={(e) => setBusinessName(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-brown-800">Business Details</label>
          <textarea 
            value={businessDetails} 
            onChange={(e) => setBusinessDetails(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800">Owner Name</label>
          <input 
            type="text" 
            value={ownerName} 
            onChange={(e) => setOwnerName(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800">How the business started</label>
          <textarea 
            value={businessStart} 
            onChange={(e) => setBusinessStart(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800">Contact Number</label>
          <input 
            type="tel" 
            value={contactNo} 
            onChange={(e) => setContactNo(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-800">Do you want to sell your products on your website?</label>
          <input 
            type="checkbox" 
            checked={sellProducts} 
            onChange={(e) => setSellProducts(e.target.checked)} 
            className="mt-1"
          />
        </div>
        {sellProducts && (
          <>
            {productDetails.map((product, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-800">Product Name</label>
                  <input 
                    type="text" 
                    value={product.name} 
                    onChange={(e) => handleProductDetailChange(index, 'name', e.target.value)} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-800">Product Price</label>
                  <input 
                    type="text" 
                    value={product.price} 
                    onChange={(e) => handleProductDetailChange(index, 'price', e.target.value)} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-800">Product Quantity</label>
                  <input 
                    type="text" 
                    value={product.quantity} 
                    onChange={(e) => handleProductDetailChange(index, 'quantity', e.target.value)} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300" 
                  />
                </div>
              </div>
            ))}
            <button type="button" onClick={handleAddProductDetail} className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded mt-2">
              Add More Products
            </button>
          </>
        )}
        <button type="submit" className="bg-[#CB503E] hover:bg-red-400 text-white font-bold py-3 px-6 rounded">
          Submit
        </button>
      </form>
      <div className="mt-8 text-center">
        <Link to="/">
          <button className="bg-[#42260E] hover:bg-brown-700 text-white font-bold py-3 px-6 rounded m-2">
            Home Page
          </button>
        </Link>
        <Link to="/ViewBusiness">
          <button className="bg-[#CB503E] hover:bg-red-400 text-white font-bold py-3 px-6 rounded m-2">
            View Business
          </button>
        </Link>
      </div>
      <Footer/>
      </div>
    </div>
  );
};

export default FormPage;
