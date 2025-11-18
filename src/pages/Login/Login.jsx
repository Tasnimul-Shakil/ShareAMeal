import { useContext } from "react";
import LoginPageImg from "../../assets/login_image.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navLinks = (
    <>
      <li className=" px-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" px-2">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className=" px-2">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  const { signIn, googleLogin, gitLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location is set to ", location);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitLogin = () => {
    gitLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code) {
          Swal.fire({
            title: "Account Not Found",
            text: "You don't have an account. Do you want to try again or go to the register page?",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#09B161",
            cancelButtonColor: "#55D4AB",
            confirmButtonText: "Try Again",
            cancelButtonText: "Go to Register Page",
          }).then((result) => {
            if (result.isConfirmed) {
              console.log("Try again");
            } else {
              navigate("/register");
            }
          });
        } else if (error.code === "auth/invalid-credential") {
          alert("Invalid credentials. Please check your email and password.");
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#F4FBFF]">
      <div className="navbar absolute ">
        <div className="navbar-start"></div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
      <div className="hero-content mx-auto flex-col gap-10 lg:flex-row">
        <div className="hidden lg:block text-center">
          <img className=" h-[50rem]" src={LoginPageImg} alt="" />
        </div>
        <div className=" w-full lg:w-1/2 lg:p-10">
          <form onSubmit={handleLogin} className="">
            <h1 className="text-5xl pt-20 lg:pt-0 font-bold">Sign In</h1>
            <div className="pt-10">
              <h2>Sign in with Open account</h2>
              <div className="mb-6 flex gap-5">
                <button
                  onClick={() => handleGoogleLogin()}
                  className="btn btn-outline mt-3"
                >
                  <FcGoogle className="text-xl"></FcGoogle>
                  Google
                </button>
                <button
                  onClick={() => handleGitLogin()}
                  className="btn btn-outline mt-3"
                >
                  <FaGithub className="text-xl"></FaGithub>
                  GitHub
                </button>
              </div>
            </div>
            <div className="form-control border-t-2 pt-2 mt-8">
              <h2 className=" text-xs">Or Continue with email address</h2>
              <label className="label pt-2">
                <span className="font-bold pt-2">Email</span>
              </label>
              <div className="input input-bordered flex gap-2 items-center">
                <span className="text-sm text-[#ababab]">
                  <MdMailOutline className="text-xl"></MdMailOutline>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label pt-2">
                <span className=" font-bold pt-2">Password</span>
              </label>
              <div className="input input-bordered flex gap-2 items-center">
                <span className="text-sm text-[#ababab]">
                  <MdOutlinePassword className="text-xl"></MdOutlinePassword>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Add a AlphaNumeric password"
                  className="w-full"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-gray-600"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <label className="label pt-2">
                <a href="#" className=" pt-2 label-text link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0 text-xl text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
                Login
              </button>
            </div>
          </form>
          <div className="pt-10">
            <p className="label-text">
              Do not have any account?
              <Link to="/register" className=" font-semibold link-hover">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
