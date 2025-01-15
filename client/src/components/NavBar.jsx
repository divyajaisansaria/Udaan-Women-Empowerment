import React from "react";
import logo from "../Asset/assets/Udaan_logo.png"; // Update the path to match your actual file structure
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate()
  return (
    <div className="w-full h-16 p-0 m-0 shadow bg-white flex items-center px-6" style={{ fontFamily: 'Arial, Calibri, sans-serif' }}>
      <img className="w-40 h-40 mr-4 mt-6 cursor-pointer" onClick={()=>{navigate('/')}} src={logo} alt="Udaan Logo" />
      
      <div className="flex space-x-10 ml-auto">
        {/* Correct links based on routes */}
        <Link to="/" className="text-black text-sm font-normal cursor-pointer">Home</Link>
        <Link to="/Jobportal" className="text-black text-sm font-normal cursor-pointer">JobPortal</Link>
        <Link to="/Courses" className="text-black text-sm font-normal cursor-pointer">Courses</Link>
        <Link to="/homebusiness" className="text-black text-sm font-normal cursor-pointer">Business</Link>
        {/* <Link to="/Aboutus" className="text-black text-sm font-normal cursor-pointer">AboutUs</Link> */}
        <Link to="/Tools" className="text-black text-sm font-normal cursor-pointer">Tools</Link>
      </div>

      {/* Conditionally render UserButton or Sign-in button */}
      {
        user
        ? <div className="flex items-center gap-3 mx-10">
            {/* <Link to="/Jobportal/Application" className="text-black text-sm font-normal cursor-pointer">Applied Jobs</Link> */}
            <UserButton />
          </div>
        :<button
        onClick={e => openSignIn()}
        className="w-20 h-10 bg-[#ff4040] text-white ml-4 rounded-2xl flex items-center justify-center text-sm"
      >
        Sign-In
      </button>
      
      }
    </div>
  );
};

export default NavBar;
