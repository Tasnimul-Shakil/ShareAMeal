import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import LoginPageImg from "../../assets/login_image.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin, gitLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = (
    <>
      <li className="px-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="px-2">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="px-2">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await signIn(email, password);
      navigate(location?.state?.from || "/");
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: error.message || "Please check your credentials",
        icon: "error",
      });
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      navigate(location?.state?.from || "/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Login Failed",
        text: "Could not login with Google",
        icon: "error",
      });
    }
  };

  // Handle GitHub login
  const handleGitLogin = async () => {
    try {
      const result = await gitLogin();
      navigate(location?.state?.from || "/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Login Failed",
        text: "Could not login with GitHub",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FBFF]">
      {/* Navbar */}
      <div className="navbar absolute">
        <div className="navbar-start"></div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>

      {/* Login content */}
      <div className="hero-content mx-auto flex-col gap-10 lg:flex-row">
        {/* Left image */}
        <div className="hidden lg:block text-center">
          <img className="h-[50rem]" src={LoginPageImg} alt="Login" />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 lg:p-10">
          <form onSubmit={handleLogin}>
            <h1 className="text-5xl pt-20 lg:pt-0 font-bold">Sign In</h1>

            {/* OAuth login */}
            <div className="pt-10">
              <h2>Sign in with Open account</h2>
              <div className="mb-6 flex gap-5">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn btn-outline mt-3 flex items-center gap-2"
                >
                  <FcGoogle className="text-xl" /> Google
                </button>
                <button
                  type="button"
                  onClick={handleGitLogin}
                  className="btn btn-outline mt-3 flex items-center gap-2"
                >
                  <FaGithub className="text-xl" /> GitHub
                </button>
              </div>
            </div>

            {/* Email/password login */}
            <div className="form-control border-t-2 pt-2 mt-8">
              <h2 className="text-xs">Or Continue with email address</h2>
              <label className="label pt-2">
                <span className="font-bold pt-2">Email</span>
              </label>
              <div className="input input-bordered flex gap-2 items-center">
                <span className="text-sm text-[#ababab]">
                  <MdMailOutline className="text-xl" />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label pt-2">
                <span className="font-bold pt-2">Password</span>
              </label>
              <div className="input input-bordered flex gap-2 items-center">
                <span className="text-sm text-[#ababab]">
                  <MdOutlinePassword className="text-xl" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full"
                  required
                  autoComplete="current-password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <label className="label pt-2">
                <a href="#" className="pt-2 label-text link link-hover">
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
              Do not have an account?
              <Link to="/register" className="font-semibold link-hover">
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
