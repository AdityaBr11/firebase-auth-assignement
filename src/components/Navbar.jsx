import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const nav = useNavigate();
  const Logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          nav("/");
        }, 2000);
      })
      .catch((error) => {
        toast.success(error, {
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
  };

  const currentUser = useAuth();
  return (
    <div className="navbar bg-base-300 rounded-3xl w-[98%] mt-4 mx-auto px-6">
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
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Firebase
        </Link>
      </div>
      <div className="flex-none space-x-2">
        {currentUser ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li>
                  <a className="justify-between capitalize">
                    {currentUser.email.substring(
                      0,
                      currentUser.email.indexOf("@")
                    )}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => Logout()}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Link to="/login">
                  <p>login</p>
                </Link>
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
