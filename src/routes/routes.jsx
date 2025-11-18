import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import ViewAllCards from "../pages/ViewAllCards/ViewAllCards";
import About from "../pages/About/About";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddNewFood from "../pages/AddNewFood/AddNewFood";
import Profile from "../pages/Profile/Profile";
import UpdateFoodInfo from "../pages/UpdateFoodInfo/UpdateFoodInfo";
import CountryCards from "../pages/ViewAllCards/CountryCards";

const BASE_URL = "http://localhost:3000/foodInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const cardResponse = await fetch(`${BASE_URL}`);
          const blogResponse = await fetch("/Blog.json");

          const cardData = await cardResponse.json();
          const blogData = await blogResponse.json();

          return { cardData, blogData };
        },
      },
      {
        path: "/ViewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const [cardResponse, allCardsResponse] = await Promise.all([
            fetch(`${BASE_URL}/${params.id}`),
            fetch(`${BASE_URL}`),
          ]);
          const card = await cardResponse.json();
          const allCards = await allCardsResponse.json();
          return { card, allCards };
        },
      },
      {
        path: "/AddNewFood",
        element: (
          <PrivateRoute>
            <AddNewFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewAllCards",
        element: (
          <PrivateRoute>
            <ViewAllCards />
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(`${BASE_URL}`);
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/about",
        element: <About />,
        loader: () => fetch("/TeamMembers.json").then((res) => res.json()),
      },
      {
        path: "/blogDetails/:blog_id",
        element: <BlogDetails />,
        loader: () => fetch("/Blog.json").then((res) => res.json()),
      },
      {
        path: "/AllBlogs",
        element: <AllBlogs />,
        loader: () => fetch("/Blog.json").then((res) => res.json()),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile/dataUpdate/:id",
        element: (
          <PrivateRoute>
            <UpdateFoodInfo />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${BASE_URL}/${params.id}`).then((res) => res.json()),
      },
      {
        path: "/countryCards/:country_name",
        element: <CountryCards />,
        loader: async ({ params }) => {
          const { country_name } = params;
          const response = await fetch(`${BASE_URL}`);
          const data = await response.json();
          return { data, country_name };
        },
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(`${BASE_URL}`);
          const data = await response.json();
          return data;
        },
      },
    ],
  },
]);

export default routes;
