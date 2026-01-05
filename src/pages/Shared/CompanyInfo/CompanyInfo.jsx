import infoBackground from "../../../assets/Illustration.png";
import cardIcon1 from "../../../assets/Icon.png";
import cardIcon2 from "../../../assets/Icon-1.png";
import cardIcon3 from "../../../assets/Icon-2.png";
import cardIcon4 from "../../../assets/Icon-3.png";
import { Link } from "react-router-dom";

const CompanyInfo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mx-auto mt-16 mb-16 max-w-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="-mt-2 p-2 lg:mt-0  lg:max-w-md lg:flex-shrink-0">
        <div
          className="rounded-2xl h-[30rem] w-[25rem] bg-no-repeat space-y-4 px-4 py-10 lg:flex items-start text-start lg:flex-col lg:justify-start "
          style={{ backgroundImage: `url(${infoBackground})` }}
        >
          <h1 className="text-3xl font-semibold text-[#155315]">
            The Smarter Way to <br /> Share Food
          </h1>
          <p>
            Help reduce food waste while supporting your community. Discover
            fresh, safe, and surplus meals shared by people around you.
          </p>
          <Link to={`/about`} onClick={scrollToTop}>
            <button className=" btn mt-10 px-4 border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
              About Us
            </button>
          </Link>
        </div>
      </div>
      <div className=" lg:flex-auto px-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          Empowering Your Food-Sharing Journey
        </h3>
        <p className="pt-4 text-base leading-7 text-gray-600">
          At ShareAMeal, we make it easy to share, request, or donate food with
          confidence. Our platform prioritizes safety, transparency, and
          convenience—giving you full control every step of the way.
        </p>
        <div className="grid lg:grid-cols-2 items-center gap-x-4 lg:gap-y-4 gap-y-10 pt-6 ">
          <div className=" px-2  ">
            <img src={cardIcon1} alt="" />
            <div className="">
              <h2 className="card-title">Safe & Verified Sharing</h2>
              <p className="pr-4">
                All shared foods follow clear standards to ensure quality and
                safety—so you can give or receive meals with peace of mind.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon2} alt="" />
            <div className="">
              <h2 className="card-title">Freshness Guarantee</h2>
              <p className="pr-4">
                Rest assured knowing every item comes with clear manufacturing
                and expiry details, helping you choose only the freshest
                options.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon3} alt="" />
            <div className="">
              <h2 className="card-title">Zero Commission</h2>
              <p className="pr-4">
                Share or request food for free. We charge no extra fees, making
                generosity simple and accessible for everyone.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon4} alt="" />
            <div className="">
              <h2 className="card-title">Full Control</h2>
              <p className="pr-4">
                Manage your shared food items, track requests, update details,
                and communicate with others—all in one streamlined dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
