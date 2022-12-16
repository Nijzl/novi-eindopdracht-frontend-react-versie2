import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "firebase/auth";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRecipes from "./pages/AllRecipes";
import Fridge from "./pages/Fridge";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {

  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/> {/* Home */}
                <Route path='/allrecipes' element={<AllRecipes/>}/> {/* All Recipes*/}
                <Route path='/fridge' element={<Fridge/>}/> {/* In the Fridge */}
                <Route path='/search' element={<Search/>}/> {/* Search Recipe */}
                <Route path='/profile' element={<Profile/>}/> {/* Profile */}
                <Route path='/signup' element={<SignUp/>}/> {/* Sign up */}
                <Route path='/login' element={<Login/>}/> {/* Sign in */}
            </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
