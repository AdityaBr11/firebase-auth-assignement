import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AllRoute = () => {
  return (
  
     <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <Home />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Navbar /> <Login/>
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Navbar /> <Signup/>
          </>
        }
      />
    </Routes>
 
  );
};

export default AllRoute;
