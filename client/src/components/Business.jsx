import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Asset/assets/8077066.jpg'
const Business = () => {
  return (
    <div className=" w-full container mx-auto bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-white shadow-lg py-12">
         <div className="w-full flex"> <div className="w-6/12 relative"> <img src={img} alt="Empowering Women" className="object-cover h-full rounded-r-full" style={{ clipPath: "ellipse(50% 100% at 50% 0%)" }} /> {/* Half-circle image */} </div>
       <div className="w-4/12 flex flex-col justify-center text-center max-w-4xl mx-auto px-4"> 
       <h1 className="text-5xl font-bold text-[#42260E] mb-6 leading-snug"> Empowering women entrepreneurs for growth. </h1>
        <p className="text-lg text-[#CB503E] mb-8"> Empower your business with Udaan's tailored solutions for women entrepreneurs. Let's elevate growth together. </p> 
        </div> </div> </header>

      {/* Features Section */}
      <section className="py-16 bg-[#FFD6D0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-4 text-white">1</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Consulting</h3>
            <p className="text-gray-600">
              Comprehensive strategies to drive sustainable business growth.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-4 text-white">2</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Strategy</h3>
            <p className="text-gray-600">
              Crafting actionable roadmaps for achieving your business goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-4 text-white">3</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-600">
              Empowering businesses to innovate and scale effectively.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-4 text-white ">4</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Investment</h3>
            <p className="text-gray-600">
              Aligning resources to optimize returns and support growth.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#FFF0ED]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-[#42260E] mb-6">
            Scale Your Business with Confidence
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us help you navigate the complexities of business transformation with ease and expertise.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/FormPage">
              <button className="bg-[#42260E] hover:bg-brown-700 text-white font-bold py-3 px-6 rounded shadow">
                Add Business
              </button>
            </Link>
            <Link to="/ViewBusiness">
              <button className="bg-[#CB503E] hover:bg-red-400 text-white font-bold py-3 px-6 rounded shadow">
                View Businesses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600">
              We help businesses achieve their full potential through innovative strategies and personalized support. Join us to unlock new opportunities for growth.
            </p>
          </div>
          <div className="rounded-lg shadow-lg bg-[#FFD6D0] p-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Over 166+ successful projects delivered</li>
              <li>Trusted by 190+ clients worldwide</li>
              <li>Generated $120M+ in client revenue</li>
              <li>13 years of expertise in driving results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-center text-gray-100">
        <p className="text-sm">© 2025 Udaan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Business;