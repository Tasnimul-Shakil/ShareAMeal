import { useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import Blogs from "../Home/Blogs";

const AllBlogs = () => {
  const cards = useLoaderData();
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
            <li>All Blog</li>
          </ul>
        </div>
        <h1 className=" animate__animated animate__bounce text-3xl font-bold ">
          Discover the World
        </h1>
        <p className="">
          Join TravelCraft as we uncover hidden gems and share travel tips. From
          breathtaking landscapes to vibrant cultures, our blog is your gateway
          to unforgettable adventures. Start exploring today!
        </p>
        <div className=" pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cards.map((aCards) => (
            <Blogs key={aCards._id} card={aCards}></Blogs>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBlogs;
