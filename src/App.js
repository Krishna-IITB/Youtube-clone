import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommenedVideos from './RecommenedVideos';
import SearchPage from './SearchPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
        <Route path='/search/:searchTerm' element={
            <>
              
              <div className="app_page">
                <Sidebar />
                <SearchPage />
                
              </div>
            </>
          } />
          <Route path='/' element={
            <>
              
              <div className="app_page">
                <Sidebar />
                <RecommenedVideos />
              </div>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
