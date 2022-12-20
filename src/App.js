import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "firebase/auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flashcards from "./pages/Flashcards";
import AllRecipes from "./pages/AllRecipes";
import Fridge from "./pages/Fridge";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/> {/* Home */}
                <Route path='/flashcards' exact element={<Flashcards/>}/> {/* Flashcards */}
                <Route path='/allrecipes' element={<AllRecipes/>}/> {/* All Recipes*/}
                <Route path='/fridge' element={<Fridge/>}/> {/* In the Fridge */}
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
