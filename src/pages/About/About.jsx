import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import galleryImage13 from "../../assets/about.png";
import galleryImage8 from "../../assets/Mission.png";
import galleryImage9 from "../../assets/Vision.png";
import { useLoaderData } from "react-router-dom";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import shareTrip from "../../assets/ShareTrips.svg";
import airbnb from "../../assets/airbnb.svg";
import Kayak from "../../assets/Kayak.svg";

const About = () => {
  const teamMembers = useLoaderData();
  // console.log(teamMembers, "Team members");
  const stats = [
    { id: 1, name: "Meals Shared Every 24 Hours", value: "44 million" },
    { id: 2, name: "Communities Connected", value: "$119 trillion" },
    { id: 3, name: "People Impacted Globally", value: "46,000" },
  ];
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <a className="flex items-center">
                <IoMdArrowRoundBack /> Home
              </a>
            </Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
      <div
        className="hero min-h-96 rounded-2xl"
        style={{ backgroundImage: `url(${galleryImage13})` }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold text-white">
              About ShareAMeal
            </h1>
            <p className="mb-5">
              ShareAMeal is transforming the way communities share food by
              combining trust, transparency, and smart technology. We make it
              easy for individuals, families, and organizations to share surplus
              food safely and responsibly. Your trusted partner in reducing
              waste, supporting others, and building a stronger community.
            </p>
          </div>
        </div>
      </div>
      <div className=" min-h-56 py-14">
        <div className="hero-content px-0 items-start flex-col lg:gap-6 lg:flex-row">
          <img
            src={galleryImage8}
            className="lg:max-w-2xl rounded-lg shadow-2xl"
          />
          <div className="lg:px-2 px-4">
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="pt-6 ">
              At <span className="text-[#55D4AB] text-bold">ShareAMeal</span>,
              our mission is to redefine how communities manage surplus food by
              creating a platform built on trust, compassion, and transparency.
              We aim to make food-sharing safe, accessible, and meaningful for
              everyone—whether you’re donating extra meals, requesting food
              support, or simply reducing waste at home. We don’t just connect
              people with food—we connect people with opportunities to make a
              real difference. By empowering donors and recipients with clear
              information, verified safety standards, and user-friendly tools,
              we strive to create a system where every shared meal adds value,
              dignity, and hope. Our focus on continuous improvement ensures
              that we deliver exceptional convenience, reliability, and positive
              community impact—one meal at a time
            </p>
          </div>
        </div>
      </div>
      <div className=" min-h-56 lg:text-end py-14">
        <div className="lg:flex justify-between items-start px-0 flex-col lg:gap-6 lg:flex-row-reverse">
          <img
            src={galleryImage9}
            className="lg:max-w-2xl rounded-lg shadow-2xl"
          />
          <div className="lg:px-2 px-4 lg:pt-0 pt-5">
            <h1 className="text-3xl font-bold">Our Vision</h1>
            <p className="pt-2 lg:pl-24">
              ntegrity is the foundation of everything we do at ShareAMeal. Our
              vision is to build a world where no good food goes to waste and
              communities thrive through mutual support. We operate with
              honesty, responsibility, and full transparency, ensuring users can
              trust every step of the process—from listing food to receiving it.
              Professionalism and clarity guide our interactions, while our
              commitment to innovation pushes us to improve safety, efficiency,
              and accessibility. Our long-term vision is to set new standards
              for food-sharing platforms globally—where technology, community,
              and sustainability unite to create a better future for all.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14">
        <div className="mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center pb-4">
            ShareAMeal Overview
          </h2>
          <p className="text-center lg:px-24 text-sm">
            ShareAMeal provides a complete food-sharing ecosystem, connecting
            donors, recipients, communities, and organizations in one simple
            platform.
          </p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center pt-6 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#55D4AB] sm:text-5xl elementor-counter-number-prefix">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div>
        <h2 className="text-center pb-4 pt-16 text-3xl font-semibold leading-8 text-gray-900">
          Meet Our Team Of Experts
        </h2>
        <div className=" pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {teamMembers.map((aCards) => (
            <TeamCard key={aCards.id} card={aCards}></TeamCard>
          ))}
        </div>
      </div>
      <div className=" py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center pb-10 text-2xl font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.worldtrips.com/hubfs/logos/WorldTrips%20Logos/worldtrips-travel-insurance-black.svg"
              alt="World Trips"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={shareTrip}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={airbnb}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Kayak}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
