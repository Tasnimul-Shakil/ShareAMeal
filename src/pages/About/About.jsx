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
    { id: 1, name: "Trips Planned Every 24 Hours", value: "44 million" },
    { id: 2, name: "Countries Explored", value: "$119 trillion" },
    { id: 3, name: "Happy Travelers", value: "46,000" },
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
              About TravelCraft
            </h1>
            <p className="mb-5">
              TravelCraft revolutionizes the travel experience with expertise,
              transparency, and personalized service, guiding travelers on
              unforgettable journeys. Your trusted partner in exploration and
              adventure.
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
              At TravelCraft, our mission is to transform the travel experience
              into an empowering and enriching adventure for our clients. We are
              dedicated to redefining industry standards by prioritizing the
              unique preferences and aspirations of each traveler we serve. Our
              goal is not just to facilitate trips but to create lasting
              memories founded on trust, integrity, and personalized service. We
              strive to guide individuals, families, and groups through every
              step of their journey, whether it’s exploring new destinations or
              planning the perfect getaway. With a relentless focus on
              innovation and excellence, we aim to surpass expectations,
              delivering unparalleled value and peace of mind to our travelers.
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
              Integrity lies at the heart of everything we do at TravelCraft. It
              forms the cornerstone of our values, alongside professionalism,
              transparency, and a steadfast commitment to excellence. We conduct
              ourselves with honesty and integrity in all our interactions,
              ensuring that our clients can trust us implicitly. Our dedication
              to professionalism ensures that every traveler receives the
              highest quality service, tailored to their unique needs and
              preferences. Transparency is fundamental to our approach, as we
              believe in open communication and accountability throughout the
              entire travel planning process. At TravelCraft, we are driven by a
              passion for innovation and continuous improvement, constantly
              seeking new ways to enhance the traveler experience and set new
              benchmarks for excellence in the industry.
            </p>
          </div>
        </div>
      </div>
      <div className="py-14">
        <div className="mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center pb-4">
            TravelCraft Overview
          </h2>
          <p className="text-center lg:px-24 text-sm">
            TravelCraft offers a comprehensive travel platform, connecting
            travelers, destinations, and travel professionals seamlessly.
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
