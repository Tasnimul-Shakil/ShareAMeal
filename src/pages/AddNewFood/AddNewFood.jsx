import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const AddNewFood = () => {
  const { user } = useContext(AuthContext);
  const [mfgDate, setMfgDate] = useState("");
  const [expDate, setExpDate] = useState("");

  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const userPhoto = user?.photoURL || "";

  // Handle form submission
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const Food_name = form.Food_name.value;
    const food_category = form.food_category.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const pickup_location = form.pickup_location.value;
    const category_Photo = form.category_Photo.value;
    const food_quantity = form.food_quantity.value;
    const expired_date = form.expired_date.value;
    const manufacturing_date = form.manufacturing_date.value;
    const user_profession = form.user_profession.value;

    // *** FIXED FOOD STATUS ***
    const food_status = form.food_status.value;

    const description = form.description.value;
    const coverPhoto = form.coverPhoto.value;
    const cardPhoto = form.cardPhoto.value;
    const photo1 = form.photo1.value;
    const photo2 = form.photo2.value;
    const photo3 = form.photo3.value;
    const photo4 = form.photo4.value;

    const newFoodAdd = {
      Food_name,
      food_category,
      user_name,
      user_email,
      category_Photo,
      pickup_location,
      food_quantity,
      expired_date,
      manufacturing_date,
      user_profession,
      food_status,
      description,
      userPhoto,
      coverPhoto,
      photo1,
      photo2,
      photo3,
      photo4,
      cardPhoto,
    };

    console.log("all info:", newFoodAdd);

    // send data to backend
    fetch("https://shareamealbackend.vercel.app/foodInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFoodAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Food information added successfully!",
            icon: "success",
            confirmButtonColor: "#09B161",
            confirmButtonText: "Add another",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="">
        <div className="text-sm px-4 breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span className="flex items-center"> Home</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span className="flex items-center"> Data List</span>
              </Link>
            </li>
            <li>Add New Food</li>
          </ul>
        </div>

        {/* Form section */}
        <div className="mx-auto bg-[#e7e7e7] mt-4 lg:p-16 p-4 rounded-2xl">
          <h1 className="lg:text-3xl text-xl text-center font-bold text-gray-900">
            Add New Food Info
          </h1>

          <form className="py-6" onSubmit={handleAddFood}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
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
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
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
                  name="user_profession"
                  placeholder="Enter your profession"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Food Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Food Name
                </label>
                <input
                  type="text"
                  name="Food_name"
                  placeholder="Enter food name"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Food Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Food Quantity
                </label>
                <input
                  type="text"
                  name="food_quantity"
                  placeholder="Enter quantity"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Food Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Food Category
                </label>
                <select
                  name="food_category"
                  defaultValue="Select A Category"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                >
                  <option disabled>Select A Category</option>
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
                  name="pickup_location"
                  placeholder="Enter pickup location"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Food Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter description"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 textarea-bordered shadow-sm ring-1 ring-inset ring-gray-300"
                />
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
                    const newMfg = e.target.value;
                    setMfgDate(newMfg);
                    if (expDate && new Date(expDate) < new Date(newMfg)) {
                      // Auto-adjust Expiry to be at least manufacturing date
                      setExpDate(newMfg);

                      // Optional: inform user
                      Swal.fire({
                        icon: "info",
                        title: "Notice",
                        confirmButtonColor: "#09B161",
                        text: `Please adjust the expired date to match the manufacturing date.
                      দয়া করে এক্সপায়ারি তারিখটি ম্যানুফ্যাকচারিং তারিখের সাথে মিলিয়ে নিন।`,
                        showConfirmButton: true,
                        confirmButtonText: "OK",
                      });
                    }
                  }}
                  className="input validator w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Expiry Date */}
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
                  min={mfgDate || undefined} // if mfgDate empty, min not set
                  className="input validator w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1"
                />
              </div>

              {/* Food Status (Radio) */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Food Status
                </label>

                <div className="mt-2 flex justify-between gap-6">
                  <label className="label flex gap-4 cursor-pointer">
                    <span className="label-text">Available</span>
                    <input
                      type="radio"
                      name="food_status"
                      value="Available"
                      defaultChecked
                      className="radio "
                    />
                  </label>

                  <label className="label flex gap-4 cursor-pointer">
                    <span className="label-text">Unavailable</span>
                    <input
                      type="radio"
                      name="food_status"
                      value="Unavailable"
                      className="radio"
                    />
                  </label>
                </div>
              </div>

              {/* Donator Photo */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Donator Photo (Auto Filled)
                </label>
                <input
                  disabled
                  type="text"
                  defaultValue={userPhoto}
                  name="userPhoto"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Cover Photo */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Cover Photo (URL Only) <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="coverPhoto"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Country Photo */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Category Photo (URL Only)
                </label>
                <input
                  type="text"
                  name="category_Photo"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Card Photo */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Card Photo (URL Only) <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="cardPhoto"
                  className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>

              {/* Extra Photos */}
              {["photo1", "photo2", "photo3", "photo4"].map((field, i) => (
                <div key={i} className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    {field} (URL Only)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={i < 3}
                    type="text"
                    name={field}
                    className="mt-2 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
              ))}
            </div>

            {/* Submit button */}
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black"
              >
                Add Food Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewFood;
