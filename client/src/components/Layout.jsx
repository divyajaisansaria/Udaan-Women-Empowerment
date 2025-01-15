import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow p-6 bg-white">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
