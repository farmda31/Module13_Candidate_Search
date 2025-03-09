import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import ErrorPage from './pages/ErrorPage';
import SavedCandidates from './pages/SavedCandidates';

const App() {
  console.log('App component rendered'); //Added debugging log
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved-candidates" element={<SavedCandidates />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
