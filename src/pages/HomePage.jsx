import { Link } from "react-router-dom";

// import {tourimage} from "../../public/tourimage.webp"
export const HomePage = () => {
  return (
    <div>
      <div className="h-dvh px-40 flex">
        <div className="w-1/2 flex justify-center flex-col h-3/4">
          <h2 className="text-4xl text-gray-900 ">
            You&apos;ll never travel without your trip planner
          </h2>
          <p className="text-gray-600 text-xl py-2">
            You can Build, organize, and map your own itineraries in a free guidence for
            vacations & road trips
          </p>
          <Link to="./makeplanner">
          <button className="p-2 px-4 text-xl bg-medium border-2 border-dark rounded w-fit mt-5">
            Make Planning
          </button>
          </Link>
        </div>
        <div className="w-1/2 p-5 items-center h-fit">
          <img src="/tourimage.webp" alt="tour-img" />
        </div>
      </div>
    </div>
  );
};
