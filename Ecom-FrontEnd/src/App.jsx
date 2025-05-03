import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Userinfo from "./pages/Userinfo";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/:prdId" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user-profile" element={<Userinfo />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
