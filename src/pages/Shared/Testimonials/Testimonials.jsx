import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import "./SwiperCard.css";

const Testimonials = () => {
  return (
    <div className="lg:flex justify-between items-center lg:px-10 px-4 flex-col lg:gap-6 lg:flex-row lg:py-16 py-10">
      <div className="lg:pb-0 pb-10">
        <h1 className="lg:text-3xl text-2xl text-center font-bold">
          What our users are <br /> are saying about us?
        </h1>
        <p className="text-center">
          Discover what our community members think about their food-sharing
          experience on ShareAMeal.
        </p>
        <div className="flex flex-col items-center text-center lg:flex-row lg:gap-16 gap-4 pt-10">
          <div className=" space-y-2">
            <h1 className="text-3xl font-bold text-[#55D4AB]">10m+</h1>
            <p className=" font-semibold">Happy Users</p>
          </div>
          <div className=" space-y-2">
            <h1 className="text-3xl font-bold text-[#55D4AB]">4.88</h1>
            <p className=" font-semibold">Overall rating</p>
            <div className="flex gap-4 text-[#f0ca4e] text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper lg:w-[32rem] w-[18rem]"
      >
        {/* All slides now have the same fixed height and consistent avatar size */}
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/Hqgy4YR/Avater6.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">John Smith</h2>
                <p className="text-black">Student</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                I received a meal when I really needed help, and the donor was
                incredibly kind. The system is transparent, easy to use, and
                feels trustworthy.
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">June 12, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/kG1wD53/Avater1.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">Ayesha Rahman</h2>
                <p className="text-black">Home Cook</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                Great initiative! I shared some extra home-cooked food, and it
                was picked up within an hour. The process was smooth and the
                platform feels very safe. Love this idea!
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">August 5, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/c1HDgr2/Avater4.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">Michael Brown</h2>
                <p className="text-black">Explorer</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                I love how clean and user-friendly the interface is. Uploading
                photos, adding details, and managing my shared items is super
                simple. Highly recommended!
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">October 20, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/grzS39p/Avater2.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">Sarah Lee</h2>
                <p className="text-black">Globetrotter</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                I shared leftover party food and it reached the right people
                quickly. It feels great to help others instead of throwing away
                good food.
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">December 8, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/PNvFs7k/Avater5.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">David Miller</h2>
                <p className="text-black">NGO Volunteer</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                Our community uses ShareAMeal to distribute surplus food from
                events. The tracking and transparency features save us a lot of
                time.
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">February 15, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card p-4 border-2 border-[#155315] bg-[#d6f8ee] shadow-xl rounded-xl h-60 flex flex-col justify-between">
            <div className="flex gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src="https://i.ibb.co/BPmXysM/Avater3.png"
                alt=""
              />
              <div>
                <h2 className="card-title text-black">Amanda White</h2>
                <p className="text-black">Food Enthusiast</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm">
                tried both donating and receiving food. Every experience has
                been positive—polite users, clear details, and smooth pickup.
                Excellent job by the team!
              </p>
            </div>
            <div className="pt-4 flex justify-between items-end">
              <p className="font-bold">April 3, 2024</p>
              <RiDoubleQuotesL className="text-5xl text-[#155315]/20" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
