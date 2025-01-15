import React from 'react'
import image1 from '../Asset/assets/home.jpg';
import image2 from '../Asset/assets/women.jpg';
import image3 from '../Asset/assets/women_every_field.jpg';
import image4 from '../Asset/assets/2599659.jpg';
import image5 from '../Asset/assets/mentorship.jpg';
import image6 from '../Asset/assets/tools.jpg';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='relative'>
                <div className='relative'>
                    <img className='w-full h-1/3 filter opacity-90 transition-transform duration-700 transform hover:scale-105' src={image1} alt="Background" />
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10'></div>
                    <div className='absolute inset-0 flex items-start justify-center px-10 lg:px-20 mt-10'>
                        <p className='text-start text-3xl tracking-tighter bg-gradient-to-r from-rose-400 to-cyan-700 text-transparent bg-clip-text animate-fadeIn shadow-md p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                            Welcome to Udaan! Where Every Dream Takes Flight.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#fbc094]'>
                <p className='text-center text-2xl font-bold text-cyan-800 animate-fadeIn p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                    She Believed She Could, So She Did.
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center bg-[#ce696d] '>
                <div className='w-full md:w-5/12'>
                    <img className='w-full h-auto ' src={image2} alt="Women Empowerment" />
                </div>
                <div className='w-full md:w-7/12 p-5'>
                    <h2 className='text-4xl text-[#fbc094]  font-bold text-center mb-5' style={{ fontFamily: 'Calibri, sans-serif' }}>What We Provide</h2>
                    <p className='text-lg text-white  mx-32' style={{ fontFamily: 'Calibri, sans-serif' }}>
                        Welcome to Udaan, the ultimate destination for women empowerment. At Udaan, we strive to uplift and inspire women by providing access to job opportunities, educational courses, and mentorship programs. Our platform is designed to help women achieve economic independence, personal growth, and professional success. We believe in the power of community and aim to create a supportive environment where every woman can realize her full potential. Join us on this journey towards a brighter and more empowered future. Together, we soar higher!
                    </p>
                    
                    
                </div>
            </div>

            <div className='bg-[#fbc094] mt-5'>
                <p className='text-center text-2xl font-bold text-cyan-800 animate-fadeIn p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                Here's to strong women: May we know them. May we be them. May we raise them.                </p>
            </div>
            <div className='flex flex-col items-center bg-[#edf0ff]'>
                <div className='w-full p-5'>
                    <h2 className='text-4xl text-[#34164D] font-bold text-center mb-5' style={{ fontFamily: 'Calibri, sans-serif' }}>Job Portal</h2>
                    <p className='text-lg text-[#34164D] mx-32 text-center' style={{ fontFamily: 'Calibri, sans-serif' }}>Empower your career with Udaan's Job Portal. Discover a myriad of job opportunities tailored for women across various industries. Our platform connects you with employers who value diversity and inclusion. Find your dream job, apply with ease, and take the next step in your professional journey.</p>
                    <div className='text-center'> <button onClick={() => navigate('/Jobportal')} className='mt-4 bg-[#34164D] text-white py-2 font-bold text-center mb-5 px-4 rounded-lg'>Learn More</button> </div>
                </div>
                <div className='w-full flex'>
                   
                        <img className='w-full h-full object-cover' src={image3} alt="Women Empowerment" />
                   
                </div>
            </div>


            <div className='bg-gradient-to-r from-[#FFEAD9] to-[#FEE0D8] mt-5'>
                <p className='text-center text-2xl font-semibold text-rose-400 animate-fadeIn p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                    The future belongs to those who believe in the beauty of their dreams.                </p>
            </div>
            <div className='flex flex-col md:flex-row  items-center bg-white '>
                <div className='w-full md:w-7/12'>
                    <h2 className='text-4xl  tracking-tighter bg-gradient-to-r from-[#EEC4D0] to-[#BAC6DE] text-transparent bg-clip-text font-bold text-center mb-5' style={{ fontFamily: 'Calibri, sans-serif' }}>Courses</h2>
                    <p className='text-lg text-[#55699B] mx-20' style={{ fontFamily: 'Calibri, sans-serif' }}>
                        Enhance your skills with Udaan's Courses. Explore a wide range of educational resources designed to help you grow and succeed. Whether you're looking to learn new skills or advance your career, our courses are curated to provide you with the knowledge and tools needed for success. Start learning today and achieve your full potential.
                    </p>
                    <div className='text-center'> <button onClick={() => navigate('/Courses')} className='mt-4 bg-gradient-to-r from-[#EEC4D0] to-[#BAC6DE] text-[#55699B]  py-2 font-bold text-center mb-5 px-4 rounded-lg'>Learn More</button> </div>
                </div>
                <div className='w-full md:w-7/12 mt-0 pt-0 ml-0 '>
                    <img className='w-9/12 h-auto ' src={image4} alt="Women Empowerment" />

                </div>
            </div>


            <div className='bg-[#FFC1C2]'>
                <p className='text-center text-2xl font-bold text-[#FF7170] animate-fadeIn p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                    The future belongs to those who believe in the beauty of their dreams.                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center bg-[#FFB1B1] '>
             
                <div className=' h-full md:w-4/12  mt-0 pt-0 ml-20 '>
                    <img className='w-auto h-full ' src={image5} alt="Women Empowerment" />

                </div>
                <div className='w-full md:w-7/12'>
                    <h2 className='text-4xl text-white  font-bold text-center mb-5' style={{ fontFamily: 'Calibri, sans-serif' }}>Mentorship</h2>
                    <p className='text-lg text-white  mx-20' style={{ fontFamily: 'Calibri, sans-serif' }}>
                        Unlock your potential with Udaan's Mentorship. Connect with experienced mentors who can guide, inspire, and support you on your journey. Our mentorship program fosters personal and professional growth through one-on-one interactions, group sessions, and networking opportunities. Gain valuable insights, build confidence, and create meaningful connections
                    </p>
                    <div className='text-center'> <button onClick={() => navigate('/Mentorship')} className='mt-4 bg-[#FF7170] text-white py-2 font-bold text-center mb-5 px-4 rounded-lg'>Learn More</button> </div>
                </div>
            </div>


            <div className='bg-[#5CE8FF] mt-5'>
                <p className='text-center text-2xl font-semibold text-[#03266E] animate-fadeIn p-5 rounded-lg' style={{ fontFamily: 'Calibri, sans-serif' }}>
                There is no limit to what we, as women, can accomplish.</p>
            </div>
            <div className='flex flex-col md:flex-row  items-center bg-white '>
                <div className='w-full md:w-7/12'>
                    <h2 className='text-4xl text-[#03266E] font-bold text-center mb-5' style={{ fontFamily: 'Calibri, sans-serif' }}>Tools</h2>
                    <p className='text-lg text-[#033191] mx-20' style={{ fontFamily: 'Calibri, sans-serif' }}>
                    Manage your finances with Udaan's Accounting Tools. Access user-friendly tools designed to help you handle your finances with confidence. From budgeting to expense tracking, our resources are here to make accounting simple and efficient. Plus, explore additional helpful resources to support various aspects of your life and career.
                    </p>
                    <div className='text-center'> <button onClick={() => navigate('/Tools')} className='mt-4 bg-[#03266E] text-white py-2 font-bold text-center mb-5 px-4 rounded-lg'>Learn More</button> </div>
                </div>
                <div className='w-full md:w-7/12 mt-0 pt-0 ml-0 '>
                    <img className='w-9/12 h-auto ' src={image6} alt="Women Empowerment" />

                </div>
            </div>
        </div>
    );
}

export default Home1;
