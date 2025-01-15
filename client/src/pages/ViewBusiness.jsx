import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ViewBusiness = () => {
  const [businesses, setBusinesses] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-businesses');
        console.log(response.data); // Log the fetched businesses data
        setBusinesses(response.data);
      } catch (err) {
        console.error('Error fetching businesses:', err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchErrors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-errors');
        setErrors(response.data);
      } catch (err) {
        console.error('Error fetching error logs:', err.message);
      }
    };

    fetchBusinesses();
    fetchErrors();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this business?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/delete-business/${id}`);
      console.log(response.data); // Log the response from the server
      setBusinesses(businesses.filter(business => business._id !== id));
    } catch (err) {
      console.error('Error deleting business:', err.message);
    }
  };

  const navigateToProductPage = (business) => {
    navigate(`/product-details/${business._id}`, { state: { business } });
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <div>
      <NavBar/>
 
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-amber-950">Businesses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businesses.map((business, index) => (
            <div key={index} className="border p-4 rounded shadow-md h-full flex flex-col">
              <h2 className="text-2xl font-semibold">{business.businessName}</h2>
              <p className="text-lg">details: {truncateText(business.businessStart, 20)}</p>
              <div className="flex mt-2">
                {business.images && business.images.map((image, idx) => (
                  <img key={idx} src={`http://localhost:3000/${image}`} alt="Business" className="w-16 h-16 mr-2"/>
                ))}
              </div>
              <div className="mt-auto">
                <button onClick={() => navigateToProductPage(business)} className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Read More
                </button>
                <button onClick={() => handleDelete(business._id)} className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">

        <ul>
          {cart.map((item, index) => (
            <li key={index} className="text-lg">{`${item.name}: ${item.price}`}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ViewBusiness;
