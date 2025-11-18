import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const UpdateFoodInfo = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData(); // existing food info from loader
  const [mfgDate, setMfgDate] = useState(food.manufacturing_date || "");
  const [expDate, setExpDate] = useState(food.expired_date || "");

  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const userPhoto = user?.photoURL || "";

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedFood = {
      Food_name: form.Food_name.value,
      food_category: form.food_category.value,
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      category_Photo: form.category_Photo.value,
      pickup_location: form.pickup_location.value,
      food_quantity: form.food_quantity.value,
      expired_date: form.expired_date.value,
      manufacturing_date: form.manufacturing_date.value,
      user_profession: form.user_profession.value,
      food_status: form.food_status.value,
      description: form.description.value,
      userPhoto: form.userPhoto.value,
      coverPhoto: form.coverPhoto.value,
      photo1: form.photo1.value,
      photo2: form.photo2.value,
      photo3: form.photo3.value,
      photo4: form.photo4.value,
      cardPhoto: form.cardPhoto.value,
    };

    fetch(`http://localhost:3000/foodInfo/${food._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Food information updated successfully!",
            icon: "success",
            confirmButtonColor: "#09B161",
            confirmButtonText: "OK",
          }).then(() => window.location.reload());
        }
      });
  };

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="text-sm px-4 breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Data List</Link>
          </li>
          <li>Update Food Info</li>
        </ul>
      </div>

      <div className="mx-auto bg-[#e7e7e7] mt-4 lg:p-16 p-4 rounded-2xl">
        <h1 className="text-3xl text-center font-bold text-gray-900 mb-6">
          Update Food Info
        </h1>

        <form
          onSubmit={handleUpdateFood}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Donator Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Donator Name
            </label>
            <input
              disabled
              type="text"
              defaultValue={userName}
              name="user_name"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Donator Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Donator Email
            </label>
            <input
              disabled
              type="text"
              defaultValue={userEmail}
              name="user_email"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              User Profession
            </label>
            <input
              required
              type="text"
              defaultValue={food.user_profession}
              name="user_profession"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Food Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Food Name
            </label>
            <input
              type="text"
              defaultValue={food.Food_name}
              name="Food_name"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Food Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Food Quantity
            </label>
            <input
              type="text"
              defaultValue={food.food_quantity}
              name="food_quantity"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Food Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Food Category
            </label>
            <select
              name="food_category"
              defaultValue={food.food_category}
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            >
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Bakery">Bakery</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Pickup Location
            </label>
            <input
              type="text"
              defaultValue={food.pickup_location}
              name="pickup_location"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Description
            </label>
            <textarea
              defaultValue={food.description}
              name="description"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            ></textarea>
          </div>

          {/* Manufacturing Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Manufacturing Date
            </label>
            <input
              type="date"
              required
              name="manufacturing_date"
              value={mfgDate}
              onChange={(e) => {
                setMfgDate(e.target.value);
                if (expDate && new Date(expDate) < new Date(e.target.value))
                  setExpDate(e.target.value);
              }}
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Expired Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Expired Date
            </label>
            <input
              type="date"
              required
              name="expired_date"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              min={mfgDate || undefined}
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Food Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Food Status
            </label>
            <div className="mt-2 flex gap-6">
              <label>
                <input
                  type="radio"
                  name="food_status"
                  value="Available"
                  defaultChecked={food.food_status === "Available"}
                />{" "}
                Available
              </label>
              <label>
                <input
                  type="radio"
                  name="food_status"
                  value="Unavailable"
                  defaultChecked={food.food_status === "Unavailable"}
                />{" "}
                Unavailable
              </label>
            </div>
          </div>

          {/* User Photo */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              User Photo
            </label>
            <input
              disabled
              type="text"
              defaultValue={userPhoto}
              name="userPhoto"
              className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
            />
          </div>

          {/* Cover, Card, Category, Extra Photos */}
          {[
            "coverPhoto",
            "cardPhoto",
            "category_Photo",
            "photo1",
            "photo2",
            "photo3",
            "photo4",
          ].map((field) => (
            <div key={field} className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-900">
                {field}
              </label>
              <input
                type="text"
                defaultValue={food[field]}
                name={field}
                className="mt-2 block w-full rounded-md px-3.5 py-2 ring-1 ring-gray-300"
              />
            </div>
          ))}

          <div className="sm:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-[#55D4AB] hover:bg-[#f0ca4e] text-white py-2 rounded-md font-semibold"
            >
              Update Food Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFoodInfo;
