import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StandingsTable from './StandingsTable';
import SignIn from './SignIn';
import MatchHighlights from './MatchHighlights';
import Home from './Home';
import './App.css';
import SignUp from './SignUp';

const AppContent = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';

  return (
    <>
      {!isSignInPage && !isSignUpPage && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      {!isSignInPage && !isSignUpPage && <StandingsTable />}
      {!isSignInPage && !isSignUpPage && <MatchHighlights />}
      {!isSignInPage && !isSignUpPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
};

export default App;
