import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className=" font-poppins">
      <Outlet />
    </div>
  );
};

export default Root;
