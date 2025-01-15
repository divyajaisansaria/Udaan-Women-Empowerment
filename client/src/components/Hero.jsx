import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext"; // Ensure the path is correct
import logo from "../Asset/assets/search_icon.svg"; // Ensure the path is correct
import location from "../Asset/assets/location_icon.svg";
import microsoft from "../Asset/assets/microsoft_logo.svg";
import walmart from "../Asset/assets/walmart_logo.svg";
import samsung from "../Asset/assets/samsung_logo.png";
import accenture from "../Asset/assets/accenture_logo.png";
import amazon from "../Asset/assets/amazon_logo.png";
import adobe from "../Asset/assets/adobe_logo.png";
import bgimg from "../Asset/assets/bgimg.jpg.webp";

const Hero = () => {
    const { jobSearch, setJobSearch, locationSearch, setLocationSearch, handleSearch } = useContext(AppContext);

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div
                className="text-white py-16 text-center mx-2 rounded-xl"
                style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Find Your Voice. Find Your Job.</h2>
                <p className='mb-8 max-w-xl mx-auto text-lg font-light px-5'>The future is female. Your dream job is just a step away.</p>
                <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                    <div className='flex items-center'>
                        <img className="h-4 sm:h-5" src={logo} alt="search icon"/>
                        <input
                            type="text"
                            placeholder='Search for a job'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            value={jobSearch}
                            onChange={(e) => setJobSearch(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center'>
                        <img src={location} alt="location icon"/>
                        <input
                            type="text"
                            placeholder='Search for a location'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handleSearch} // Handle search from context
                        className='bg-[#ff4040] px-6 p-2 rounded text-white m-1'>
                        Search
                    </button>
                </div>
            </div>
            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex '>
                <div className='flex justify-between gap-10 lg:gap-16 flex-wrap'>
                    <p className="font-medium">Trusted By</p>
                    <div className='flex flex-wrap justify-center items-center space-x-10'>
                        <img className="h-6" src={microsoft} alt="Microsoft logo"/>
                        <img className="h-6" src={walmart} alt="Walmart logo"/>
                        <img className="h-6" src={samsung} alt="Samsung logo"/>
                        <img className="h-6" src={adobe} alt="Adobe logo"/>
                        <img className="h-6" src={amazon} alt="Amazon logo"/>
                        <img className="h-6" src={accenture} alt="Accenture logo"/>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Hero;
