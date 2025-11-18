import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { IoMdArrowRoundBack } from "react-icons/io";
import Blogs from "../Home/Blogs";

const BlogDetails = () => {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(null);
  const cards = useLoaderData();
  const [dataLength] = useState(3);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`/Blog.json`);
        const data = await response.json();
        const foundBlog = data.find(
          (item) => item.blog_id === parseInt(blog_id)
        );
        setBlog(foundBlog);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchBlogData();
  }, [blog_id]);

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
          <li>
            <Link to="/AllBlogs">
              <a className="flex items-center"> All Blogs</a>
            </Link>
          </li>
          <li>Blog Details</li>
        </ul>
      </div>
      {blog && (
        <>
          <img
            className="w-full h-[22rem] rounded-2xl"
            src={blog.cover_image}
            alt=""
          />
          <div className="pl-4 pr-4 lg:px-24 ">
            <h1 className=" text-3xl font-bold pt-4 pb-1">{blog.title}</h1>
            <div className="flex gap-2 pt-1 pb-6">
              <button className=" underline font-medium ">
                {blog.categories}{" "}
              </button>
              <p className="">{blog.time}</p>
            </div>
            <div className="relative py-2 flex items-center gap-x-4">
              <img
                src={blog.author_image}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900 ">
                  {blog.author_name}
                </p>
                <p className="text-gray-600">{blog.author_role}</p>
              </div>
            </div>
            <p className=" text-[#747474] leading-loose">{blog.description}</p>
            <h1 className=" text-2xl font-bold pt-12 pb-4">{blog.subtitle1}</h1>
            <p className=" text-[#747474] italic leading-loose ">
              {blog.subtitle1_description}
            </p>
            <div className="grid pt-12 lg:grid-cols-2 gap-1 grid-cols-1">
              <div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className=" rounded-lg lg:w-full"
                    src={blog.image_big}
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-row-2 gap-2">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className="  rounded-lg"
                    src={blog.image_small_1}
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    className=" rounded-lg"
                    src={blog.image_small_2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h1 className=" text-2xl font-bold pt-12 pb-4">{blog.subtitle2}</h1>
            <p className=" text-[#747474] italic leading-loose">
              {blog.subtitle2_description}
            </p>
            <h1 className=" text-2xl font-bold pt-12 pb-4">{blog.subtitle3}</h1>
            <p className=" text-[#747474] italic leading-loose">
              {blog.subtitle3_description}
            </p>
          </div>
          <div className=" lg:px-24 max-w-6xl mx-auto pt-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold pt-4 pb-1">2 Comments</h1>
              <button className="btn">Add your comment</button>
            </div>
            <div>
              {blog.comments.map((comment, index) => (
                <div
                  key={index}
                  className="relative py-4 border-b-2 flex items-start gap-10"
                >
                  <img
                    src={comment.comment_avater_image}
                    alt=""
                    className="h-20 w-20 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {comment.name}
                    </p>
                    <p className="text-gray-600 pb-6">{comment.designation}</p>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="mx-auto mt-16  sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type=""
                  className=" w-1/2 btn px-4 border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black"
                >
                  Lets talk
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <div className="py-10">
        <h1 className=" text-3xl font-bold ">See More Similar Properties</h1>
        <div className=" pt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cards.slice(0, dataLength).map((aCards) => (
            <Blogs key={aCards.id} card={aCards}></Blogs>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
