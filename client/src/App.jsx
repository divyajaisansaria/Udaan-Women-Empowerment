import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Applyjob from './pages/Applyjob';
import Application from './pages/Application';
import Home from './pages/Home';
import Jobportal from './pages/Jobportal';
import Aboutus from './pages/Aboutus';
import Tools from './pages/Tools';
import Courses from './pages/Courses';
import LoanCalculator from './pages/LoanCalculator';
import SavingCalculator from './pages/SavingCalculator';
import Inventory from './pages/InventoryManagement';
import ExpenseTracker from './pages/ExpenseTracker';
import ProfitMarginCalculator from './pages/ProfitMarginCalculator';
import InvoiceGenerator from './pages/InvoiceGenerator';
import InstantHelp from './pages/InstantHelp';
import Contact from './components/Contact';
import CoursePage from './pages/CoursePage'; // Ensure the path is correct
import emailjs from 'emailjs-com';
import FormPage from './pages/FormPage';
import HomeBusiness from './pages/homebusiness';
import ViewBusiness from './pages/viewBusiness';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

// Initialize EmailJS with your User ID (API Key)
emailjs.init('YOUR_USER_ID');  // Replace with your actual User ID

const App = () => {
  useEffect(() => {
      // Load Google Translate widget only once
      if (!window.googleTranslateScriptLoaded) {
        window.loadGoogleTranslate = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          );
        };
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
        document.body.appendChild(script);
        window.googleTranslateScriptLoaded = true; // Mark script as loaded
      }
    }, []);

  const { isLoaded, isSignedIn, user } = useUser();

  // Show loading spinner until Clerk is initialized
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If user is not signed in, redirect to the Sign-In page
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div>
       <div id="google_translate_element" className="ml-4"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jobportal" element={<Jobportal />} />
        <Route path='/Applyjob/:id' element={<Applyjob />} />
        <Route path="/Jobportal/Application" element={<Application />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/homebusiness" element={<HomeBusiness />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/course/:courseTitle" element={<CoursePage />} /> {/* New dynamic route */}
        <Route path="/LoanCalculator" element={<LoanCalculator />} />
        <Route path="/SavingCalculator" element={<SavingCalculator />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        <Route path="/profit-margin-calculator" element={<ProfitMarginCalculator />} />
        <Route path="/invoice-generator" element={<InvoiceGenerator />} />
        <Route path="/instant-help" element={<InstantHelp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/ViewBusiness" element={<ViewBusiness />} />
        </Routes>
    </div>
  );
};


export default App;