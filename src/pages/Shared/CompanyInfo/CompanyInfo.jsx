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
            The New Way to Plan <br /> Your Next Adventure
          </h1>
          <p>
            Discover your dream destination with over 10k+ travel experiences
            listed on TravelCraft.
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
          Empowering Your Travel Journey
        </h3>
        <p className="pt-4 text-base leading-7 text-gray-600">
          At TravelCraft, we empower you to explore the world with confidence.
          Our comprehensive services and commitment to transparency put you in
          control, ensuring a seamless and rewarding travel experience.
        </p>
        <div className="grid lg:grid-cols-2 items-center gap-x-4 lg:gap-y-4 gap-y-10 pt-6 ">
          <div className=" px-2  ">
            <img src={cardIcon1} alt="" />
            <div className="">
              <h2 className="card-title">Travel Insurance</h2>
              <p className="pr-4">
                Ensure peace of mind with our comprehensive solutions,
                protecting your journey and securing your adventures.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon2} alt="" />
            <div className="">
              <h2 className="card-title">Best Price Guarantee</h2>
              <p className="pr-4">
                Rest assured with TravelCraft is commitment to competitive prices
                and maximizing value for travelers.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon3} alt="" />
            <div className="">
              <h2 className="card-title">Lowest Commission Rates</h2>
              <p className="pr-4">
                Save on costs with TravelCraft is transparent pricing, offering
                some of the industry’s lowest rates without sacrificing quality
                service.
              </p>
            </div>
          </div>
          <div className=" px-2  ">
            <img src={cardIcon4} alt="" />
            <div className="">
              <h2 className="card-title">Overall Control</h2>
              <p className="pr-4">
                Take charge of your journey with TravelCraft is platform,
                providing tools for informed decision-making and ultimate
                control over your travel endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
