import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ cards }) => {
  // Note the plural 'cards'
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [dataLength] = useState(5);

  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper rounded-2xl"
      >
        {cards.slice(0, dataLength).map((card) => (
          <SwiperSlide key={card._id}>
            <div
              className="hero lg:min-h-[45rem] rounded-2xl min-h-[30rem]"
              style={{ backgroundImage: `url(${card.coverPhoto})` }}
              alt={`Cover photo of ${card.Food_name}`}
            >
              <div className="hero-overlay bg-opacity-35"></div>
              <div className="w-3/4 text-left text-white">
                <div>
                  <h1 className="animate__animated animate__zoomIn mb-5 lg:text-6xl text-3xl font-bold">
                    {card.Food_name}
                  </h1>
                  {card.description.length > 120 ? (
                    <p>
                      {card.description.slice(0, 120)}{" "}
                      <Link
                        to={`/ViewDetails/${card._id}`}
                        onClick={scrollToTop}
                      >
                        ...
                        <br />
                        <button className="btn mt-10 px-4 border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
                          See Our Products
                        </button>
                      </Link>
                    </p>
                  ) : (
                    <p>{card.description}</p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
