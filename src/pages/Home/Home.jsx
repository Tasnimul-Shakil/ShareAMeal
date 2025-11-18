import { Link, useLoaderData } from "react-router-dom";
import CompanyInfo from "../Shared/CompanyInfo/CompanyInfo";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "./Card";
import "animate.css";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import Testimonials from "../Shared/Testimonials/Testimonials";
import EmailInfo from "../Shared/EmailInfo/EmailInfo";
import Blogs from "./Blogs";
// import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Countries from "../Shared/Countries/Countries";
// import 'swiper/css/navigation';

const Home = () => {
  // const cards = useLoaderData();
  const { cardData, blogData } = useLoaderData();

  // console.log(cardData);
  // console.log(blogData);

  const [dataLength] = useState(6);

  const uniqueCountries = [];
  const uniqueCountryNames = new Set();

  cardData.forEach((card) => {
    if (!uniqueCountryNames.has(card.country_name)) {
      uniqueCountryNames.add(card.country_name);
      uniqueCountries.push(card);
    }
  });
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header cards={cardData} />
      <div className="mx-auto space-y-3 text-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className=" animate__animated animate__bounce text-3xl font-bold ">
          Based on your location
        </h1>
        <p className="">Some of our picked properties near you location.</p>
        <div className="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {uniqueCountries.slice(0, dataLength).map((aCards) => (
            <Countries key={aCards._id} card={aCards} />
          ))}
        </div>
      </div>
      <CompanyInfo />
      <div className="mx-auto space-y-3 text-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className=" animate__animated animate__bounce text-3xl font-bold ">
          Based on your location
        </h1>
        <p className="">Some of our picked properties near you location.</p>
        <div className="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cardData.slice(0, dataLength).map((aCards) => (
            <Card
              key={aCards._id}
              card={{ ...aCards, average_cost: Number(aCards.average_cost) }}
            />
          ))}
        </div>
        <Link to={`/viewAllCards`}>
          <button className=" btn mt-10 px-10 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
            Browse more properties
          </button>
        </Link>
      </div>
      <Testimonials />
      <div className="py-16">
        <h1 className="text-3xl pb-3 font-bold text-center">
          Recent Articles & News
        </h1>
        <p className="text-center pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Swiper
          slidesPerView={1}
          rewind={true}
          navigation={true}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {blogData.map((card) => (
            <SwiperSlide key={card.blog_id} className="px-4 max-w-2xl">
              <Blogs card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <EmailInfo />
      <Footer />
    </div>
  );
};

export default Home;
