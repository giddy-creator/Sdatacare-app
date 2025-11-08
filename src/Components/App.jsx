import React from "react";
import {Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

function App(){
    return(
      <>
        <ScrollToTop />
        <div className="App">
        <Header />
        <main className="flex-fill">
         
         <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
         </Routes>
        
        </main>
        <Footer />
      </div>
      </>
    );
};

export default App;