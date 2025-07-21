// src/App.js (or App.jsx)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, Route
import HomePage from './pages/HomePage';
// import MovieDetailPage from './MovieDetailPage'; // Assuming you'll have this

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* You'll likely want to pass the movie ID to MovieDetailPage */}
                <Route path="/MovieDetailPage" element={<div>Movie Detail Page Placeholder</div>} />
                {/* Or for dynamic routes: <Route path="/movie/:id" element={<MovieDetailPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;