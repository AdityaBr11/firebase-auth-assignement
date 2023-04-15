import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/firebase";


const Signup = () => {
    const nav=useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const regform = (data) => {
    const {email, password,confirmPassword } = data;

    if(password==confirmPassword){
        setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setIsLoading(false);
       
        console.log(userCredential.user,"userrr")
        toast.success("Signup Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInterval(()=>{
            nav("/login")
        },1000)
      })
      .catch((error) => {
        toast.error(error.toString(), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }else{
        toast.error("Password is not matching", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
    // console.log(displayName)
    
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className="relative flex flex-col justify-center mt-20 overflow-hidden">
        <div className="w-[90%] p-6 m-auto  rounded-md shadow-xl md:w-[35%] px-16 bg-black/50">
          <h1 className="text-3xl font-semibold text-center text-gray-300 uppercase">
            Signup
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(regform)}>
            
            <p className="mt-2 text-red-400">{errors?.displayName?.message}</p>
            <div className="mb-2">
              <p>Email</p>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
            </div>
            <p className="mt-2 text-red-400">{errors?.email?.message}</p>
            <div className="mb-2">
              <p>Password</p>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be more than 8 Character",
                  },
                })}
              />
            </div>
            <p className="mt-2 text-red-400">{errors?.password?.message}</p>

            <div className="mb-2">
              <p>Confirm password</p>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("confirmPassword", {
                  required: "ConfirmPassword is required",
                  minLength: {
                    value: 8,
                    message: "ConfirmPassword must be more than 8 Character",
                  },
                })}
              />
            </div>
            <p className="mt-2 text-red-400">{errors?.confirmPassword?.message}</p>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full btn btn-outline border-gray-300 text-gray-300"
              >
               {isLoading? <img className="w-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif" alt="" /> :"Signup"}
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-300">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-300 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
