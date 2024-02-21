import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-dark">
      <div className="px-40 py-4 flex justify-between">
        <h1 className="text-3xl font-semibold text-gray-800 items-center">
          Own-Tourism
        </h1>
        <ul className="flex space-x-10 items-center font-medium text-lg text-gray-800 ">
          <li className="hover:text-violet-800">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-violet-800">
            <Link to={"/makeplanner"}>Make Planner</Link>
          </li>
          <li className="hover:text-violet-800">
            <Link to={"/viewplanner"} >View Planner</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheNavbar;
