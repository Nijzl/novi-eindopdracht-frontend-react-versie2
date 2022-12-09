import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRecipes from "./pages/AllRecipes";
import Favourites from "./pages/Favourites";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/> {/* Home */}
                <Route path='/allrecipes' element={<AllRecipes/>}/> {/* All Recipes*/}
                <Route path='/favourites' element={<Favourites/>}/> {/* Favourites */}
                <Route path='/search' element={<Search/>}/> {/* Search Recipe */}
                <Route path='/profile' element={<Profile/>}/> {/* Profile */}
                <Route path='/signup' element={<SignUp/>}/> {/* Sign up */}
            </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
