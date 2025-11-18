import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Swal from "sweetalert2";
import { MdArrowOutward, MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import nodata from "../../assets/List Is Empty.png";

const Profile = () => {
  const cards = useLoaderData(); // All food data
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "";

  const userCards = cards.filter((card) => card.user_email === userEmail);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foodInfo/${id}`, {
          // updated endpoint
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Food info has been deleted.",
                icon: "success",
              });
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="text-sm breadcrumbs px-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>My Profile</li>
        </ul>
      </div>

      <div
        className="hero min-h-80 rounded-2xl"
        style={{
          backgroundImage: `url(https://i.ibb.co/yymPkWX/Frame-14093.png)`,
        }}
      ></div>

      <div className="flex gap-4 lg:px-12 px-4 pt-6 pb-10">
        <div className="avatar online">
          <div className="lg:w-24 w-16 rounded-full">
            <img src={user.photoURL} alt="User" />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl font-bold font-mono">
            {user.displayName}
          </h1>
          <p className="lg:text-xl text-xs">{user.email}</p>
        </div>
      </div>

      <div className="flex justify-between lg:px-10 px-4">
        <h1 className="lg:text-3xl text-xl font-bold text-[#080808]">
          My Food List: {userCards.length}
        </h1>
        <Link to="/AddNewFood">
          <button className="flex px-4 py-2 rounded-lg font-semibold lg:text-xl text-xs border-none text-white hover:text-[#080808] bg-[#080808] hover:bg-[#f0ca4e] group">
            Add New Food
            <MdArrowOutward className="lg:text-2xl text-xs transition-transform duration-500 ease-in-out transform group-hover:rotate-45" />
          </button>
        </Link>
      </div>

      {userCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={nodata} alt="No Data" className="w-64" />
          <p className="text-xl text-gray-600 mt-4">
            No food donations available. Add some to see them here!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto lg:px-10 px-4">
          <table className="table">
            <thead>
              <tr className="font-bold text-xl text-[#55D4AB]">
                <th>Number</th>
                <th>Food Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userCards.map((card, index) => (
                <tr
                  key={card._id}
                  className={index % 2 === 0 ? "bg-[#dadada]" : ""}
                >
                  <th>{index + 1}</th>
                  <td>{card.Food_name}</td>
                  <td>{card.food_category}</td>
                  <td>{card.food_quantity}</td>
                  <td>
                    <Link to={`dataUpdate/${card._id}`}>
                      <button className="btn text-xl btn-accent">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn text-white text-xl btn-error"
                      onClick={() => handleDelete(card._id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Profile;
