import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  // Initialize AOS once
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const {
    _id,
    Food_name,
    pickup_location,
    food_category,
    expired_date,
    description,
    cardPhoto,
  } = card;

  // -----------------------------
  // ✅ Request Food Function
  // -----------------------------
  const handleRequest = async () => {
    if (!user) {
      const result = await Swal.fire({
        title: "Login Required",
        text: "You need to log in to request this food.",
        icon: "warning",
        confirmButtonText: "Go to Login",
      });
      if (result.isConfirmed) navigate("/login");
      return;
    }

    const confirm = await Swal.fire({
      title: "Request this food?",
      text: "Do you want to send a request to get this food?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, request it",
    });

    if (confirm.isConfirmed) {
      try {
        const requestData = {
          food_id: _id,
          food_name: Food_name,
          image: cardPhoto,
          location: pickup_location,
          requester_email: user.email,
        };

        const response = await fetch(
          "https://shareamealbackend.vercel.app/foodRequest",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData),
          }
        );

        const data = await response.json();

        if (data.insertedId) {
          Swal.fire({
            title: "Requested!",
            text: "Your food request has been sent.",
            icon: "success",
          });
          navigate("/foodRequest");
        } else {
          Swal.fire({
            title: "Failed",
            text: "Could not request food. Try again.",
            icon: "error",
          });
        }
      } catch (err) {
        console.error("Request error:", err);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Check console.",
          icon: "error",
        });
      }
    }
  };

  return (
    <figure className="food-card" data-aos="flip-right">
      <h1 className="food-card-title">{Food_name}</h1>

      <img src={cardPhoto} alt="food" className="food-card-img" />

      <figcaption className="food-card-caption">
        <h3>More Info</h3>

        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="food-info">
          <span>{pickup_location}</span>
          <span>{expired_date}</span>
          <span>{food_category}</span>
        </div>

        <div className="btn-group">
          <Link to={`/ViewDetails/${_id}`} onClick={scrollToTop}>
            <button className="btn-card">View Details</button>
          </Link>

          <button className="btn-card" onClick={handleRequest}>
            Request Food
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
