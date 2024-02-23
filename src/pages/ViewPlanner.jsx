import { useEffect, useState } from "react";
import "../firebase/index.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/index.js";
import { Link } from "react-router-dom";

const ViewPlanner = () => {
  const collectionName = "Spot";
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    // Fetch data from server
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(collection(db, collectionName));

      setSpots(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );

      if (querySnapshot.docs.length === 0) {
        console.log("No record exist!");
      }
    }

    getDataFromFirebase();
  }, []);

  const deleteData = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
    setSpots(spots.filter((spot) => spot.id !== id));
  };

  return (
    <div className="px-40 py-5 grid grid-cols-3 gap-5">
      {spots.length <= 0 ? (
        <div className="col-span-3">
          <div className="flex flex-col ">
          <div className="mx-auto   text-center p-5 w-full mt-14 bg-dark">
            No Data exits!...
          </div>
          <div className="flex justify-center p-4">
            <Link to="../makeplanner">
            <button className="p-2  px-4 text-xl bg-medium border-2 border-dark rounded w-fit mt-5">
             Go to make Planner
            </button>
            </Link>
          </div>
          </div>
        </div>
      ) : (
        spots.map((spot, index) => {
          return (
            <div
              key={index}
              className="max-w-xs  bg-medium border border-dark rounded-lg shadow relative"
            >
              <img
                className="rounded-t-lg h-48 w-full"
                style={{ opacity: 0.8 }}
                src={spot.Photo}
                alt=""
              />
              <div
                className="absolute bottom-5 right-7 "
                title="delete"
                onClick={() => deleteData(spot.id)} // pass the id to deleteData
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="text-red-600 hover:w-10 h-10"
                >
                  <path
                    fill="currentColor"
                    d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"
                  ></path>
                </svg>
              </div>

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">
                  {spot.place}
                  <span className="text-sm font-light italic pl-2 capitalize">
                    {spot.country}
                  </span>
                </h5>
                <p className="mb-3 font-normal text-justify text-gray-900">
                  {spot.short_description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-700 bg-light rounded-lg hover:bg-dark focus:ring-4 focus:outline-none focus:ring-dark"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ViewPlanner;
