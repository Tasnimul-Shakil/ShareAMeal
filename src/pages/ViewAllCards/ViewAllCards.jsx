import { useLoaderData, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "../Home/Card";

const ViewAllCards = () => {
  const cards = useLoaderData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="mx-auto space-y-3 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className="flex items-center gap-1"
              >
                <IoMdArrowRoundBack /> Home
              </Link>
            </li>
            <li>Our Tourist Spots</li>
          </ul>
        </div>

        <h1 className="animate__animated animate__bounce text-3xl font-bold">
          Choose Your Best Tour Plan
        </h1>
        <p>Some of our picked Spots near your location.</p>

        <div className="pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {Array.isArray(cards) &&
            cards.map((aCards) => (
              <Card
                key={aCards._id}
                card={{ ...aCards, average_cost: Number(aCards.average_cost) }}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllCards;
