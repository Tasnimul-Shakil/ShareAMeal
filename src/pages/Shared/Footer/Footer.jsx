import { Link } from "react-router-dom";
import footerLogo from "../../../assets/react.svg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pb-10 pt-24">
      <footer className="footer p-10 ">
        <aside>
          <img className="w-10" onClick={scrollToTop} src={footerLogo} alt="" />
          <p className="font-semibold ">
          TravelCraft Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/" onClick={scrollToTop}>
            <a className="link link-hover">Home</a>
          </Link>
          <Link to="/ViewAllCards" onClick={scrollToTop}>
            <a className="link link-hover">Tourist Spots</a>
          </Link>
          <Link to="/AllBlogs" onClick={scrollToTop}>
            <a className="link link-hover">All Blogs </a>
          </Link>
          <Link to="/about" onClick={scrollToTop}>
            <a className="link link-hover">About</a>
          </Link>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label pt-2">
              <span className="">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn text-white bg-[#55D4AB] hover:bg-[#f0ca4e] border-0 hover:text-black join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href=""
              target="_blank"
              className="p-1.5 rounded-md items-center border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href=""
              target="_blank"
              className="p-1.5 rounded-md items-center border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href=""
              target="_blank"
              className="p-1.5 rounded-md items-center border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 ">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by Estatery Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
