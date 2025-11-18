import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Card.css";

const Card = ({ card }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const {
    _id,
    Food_name,
    country_name,
    pickup_location,
    food_category,
    expired_date,
    description,
    cardPhoto,
  } = card;
  Aos.init({ duration: 2000 });
  return (
    <div className="card " data-aos="flip-right">
      <div className="image">
        <img className="rounded-lg h-96" src={cardPhoto} alt="Someone famous" />
      </div>
      <div className="details rounded-l-lg">
        <div className="center">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="card-title">{Food_name}</h1>
              <Link
                to={`/countryCards/${country_name}`}
                className=" text-[#9d9d9d] hover:text-[#51a6bb]"
              >
                <h2>{country_name}</h2>
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-2 pt-4">
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#f0ca4e] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className=" font-normal hover:font-bold text-xs">
                {pickup_location}
              </span>
            </div>
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#f0ca4e] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className="font-normal hover:font-bold  text-xs">
                {expired_date}
              </span>
            </div>
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#f0ca4e] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className="font-normal hover:font-bold  text-xs">
                {food_category}
              </span>
            </div>
          </div>
          {description.length > 60 ? (
            <p>
              {description.slice(0, 60)}{" "}
              <Link to={`/ViewDetails/${_id}`}>
                ...
                <br />
                <button
                  onClick={scrollToTop}
                  className="btn my-4 px-2 border-0 font-semibold text-white bg-[#f0ca4e] hover:bg-[#55D4AB] hover:text-black"
                >
                  view details
                </button>
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
