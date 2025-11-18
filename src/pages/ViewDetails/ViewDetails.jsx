import { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import travelTime from "../../assets/Group 10534.svg";
import { MdModeOfTravel, MdAirplaneTicket } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import Footer from "../Shared/Footer/Footer";
import Card from "../Home/Card";

const ViewDetails = () => {
  const { card, allCards } = useLoaderData();
  const [dataLength] = useState(3);

  return (
    <div className="container mx-auto">
      <Navbar />
      <>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <a className="flex items-center">
                  <IoMdArrowRoundBack /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/ViewAllCards">
                <a>Our Tourist Spots</a>
              </Link>
            </li>
            <li>
              <a>{card.tourist_spot_name}</a>
            </li>
          </ul>
        </div>
        <div
          className="hero min-h-96 rounded-2xl"
          style={{ backgroundImage: `url(${card.coverPhoto})` }}
        ></div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:flex-row-reverse gap-6 lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="mt-6 lg:ml-4 rounded-2xl  border text-center lg:justify-center sticky top-0  lg:py-4">
              <div className="mx-auto p-4 space-y-4">
                <p className="text-base font-semibold text-gray-600">
                  Travel information added by
                </p>
                <div className="flex gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={card.userPhoto} />
                    </div>
                  </div>
                  <div className=" text-left">
                    <h1 className="text-base font-semibold text-gray-600">
                      {card.user_name}
                    </h1>
                    <p className="text-base text-gray-600">
                      {card.user_profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 lg:px-1 px-4 lg:flex-auto">
            <div className=" flex justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {card.tourist_spot_name}
                </h3>
                <p className=" text-base flex leading-7 text-gray-600">
                  <MdModeOfTravel className="text-2xl" />
                  <span>
                    <Link
                      to={`/countryCards/${card.country_name}`}
                      className=" text-[#9d9d9d] hover:text-[#51a6bb]"
                    >
                      <h2>{card.country_name}</h2>
                    </Link>
                  </span>{" "}
                  , {card.location}
                </p>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  {card.price}
                </h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 pt-6">
              <div className="flex lg:gap-3 gap-1 transition justify-center duration-300 text-[#353535] hover:bg-[#f0ca4e] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl">
                <img src={travelTime} alt="" />
                <h2>{card.category} Travel</h2>
              </div>
              <div className="flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#f0ca4e] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl">
                <MdAirplaneTicket className="text-2xl" />
                <h2> {card.seasonality}</h2>
              </div>
              <div className="flex gap-3 transition justify-center duration-300 text-[#353535] hover:bg-[#f0ca4e] hover:text-[#333333] hover:font-bold ease-in-out hover:scale-110 border-2 hover:border-0 rounded-lg lg:p-6 p-2 lg:text-xl">
                <FaPeopleLine className="text-2xl" />
                <h2>{card.total_visitors_per_year}</h2>
              </div>
            </div>
            <div className="pt-12">
              <h1 className="text-2xl font-semibold">Description</h1>
              <p className="pt-4">{card.description}</p>
            </div>
            <div className="grid pt-16 lg:grid-cols-2 gap-1 grid-cols-1">
              <div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="transition w-full h-max duration-300 ease-in-out hover:scale-105 rounded-lg"
                    src={card.cardPhoto}
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="transition w-full h-full duration-300 ease-in-out hover:scale-105 rounded-lg"
                    src={card.photo1}
                    alt=""
                  />
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="transition w-full h-full duration-300 ease-in-out hover:scale-105 rounded-lg"
                    src={card.photo2}
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="transition w-full h-full duration-300 ease-in-out hover:scale-105 rounded-lg"
                    src={card.photo3}
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="transition w-full h-full duration-300 ease-in-out hover:scale-105 rounded-lg"
                    src={card.photo4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 p-4">
          <h1 className=" text-3xl font-bold ">See More Similar Properties</h1>
          <div className=" pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {allCards.slice(0, dataLength).map((aCards) => (
              <Card
                key={aCards._id}
                card={{ ...aCards, average_cost: Number(aCards.average_cost) }}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default ViewDetails;
