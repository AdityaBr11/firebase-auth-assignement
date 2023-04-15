import React, { useState } from "react";
import useAuth from "../useAuth";

const Home = () => {
  const currentUser = useAuth();
  return (
    <div className="w-full">
      <h1 className="h-[400px] flex justify-center items-center text-5xl text-red-800">
        Welcome to our page 
        <span className="capitalize text-green-800">
           {currentUser
            ? `, ${currentUser.email.substring(0, currentUser.email.indexOf("@"))}`
            : ""}
        </span>
      </h1>
    </div>
  );
};

export default Home;
