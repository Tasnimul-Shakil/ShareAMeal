import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://shareamealbackend.vercel.app/foodRequest/${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [user]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-5">Your Requested Foods</h1>

        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Food Name</th>
              <th className="p-3 border">Location</th>
              <th className="p-3 border">Request ID</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr key={item._id} className="border">
                <td className="p-2 border">
                  <img
                    src={item.image}
                    alt="food"
                    className="w-20 h-16 object-cover"
                  />
                </td>
                <td className="p-2 border">{item.food_name}</td>
                <td className="p-2 border">{item.location}</td>
                <td className="p-2 border">{item._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default FoodRequest;
