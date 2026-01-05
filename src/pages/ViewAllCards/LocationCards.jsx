import { useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "../Home/Card";
import { Link } from "react-router-dom";

const LocationCards = () => {
  const { data, pickup_location } = useLoaderData();
  const filteredCards = data.filter(
    (card) => card.pickup_location === pickup_location
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="mx-auto space-y-3 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 ">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>
                <a className="flex items-center">
                  <IoMdArrowRoundBack /> Home
                </a>
              </Link>
            </li>
            <li>Our Food Details</li>
          </ul>
        </div>
        <h1 className="animate__animated animate__bounce text-3xl font-bold ">
          Choose Your Food
        </h1>
        <p className="">Some of our picked Spots near you location.</p>
        <div className="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredCards.map((aCards) => (
            <Card key={aCards.id} card={aCards} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationCards;
