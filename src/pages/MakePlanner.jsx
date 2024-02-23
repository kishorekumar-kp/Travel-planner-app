// import { useState } from "react";
import { useForm } from "react-hook-form";
import TextareaField from "../components/form/TextareaField";
import InputFieLd from "../components/form/InputFieLd";
import Button from "../components/form/Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/index.js";

const MakePlanner = () => {

  const collectionName = "Spot";
  const sendToServer = async (data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Data added sucessfully");
    } catch (e) {
      console.error("Error in document: ", e);
    }

    reset();
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

//   const dataSubmit = (data, e) => {
//     e.preventDefault();
//     console.log("Getting values from form submit: ", data);
//     reset();
//   };
  return (
    <div className="px-40 py-5">
      <h1 className="text-3xl font-semibold text-center mt-5 pb-3 text-gray-600">
        Make a own travel planner
      </h1>
      <form action="" onSubmit={handleSubmit(sendToServer)}>
        <div className="max-w-2xl mx-auto text-gray-700 bg-medium py-5 px-10 mb-5">
          <InputFieLd
            name="state"
            label="State name"
            type="text"
            placeholder="Enter state name here..."
            register={register("state", {
              required: "This filed is required",
            })}
            error={errors.country}
            required
          />
        </div>

        <div className="max-w-2xl mx-auto text-gray-700 bg-dark py-5 px-20">
          <div className="">
            <InputFieLd
              name={"place"}
              label="Place name"
              type="text"
              placeholder="Enter place name here "
              register={register("place", {
                required: "This filed is required",
              })}
              error={errors["place"]}
              required
            />
            <InputFieLd
              name={"Photo"}
              label="Photo"
              type="text"
              placeholder="Paste your photo link here!"
              register={register("Photo", {
                required: "This filed is required",
              })}
              error={errors["Photo"]}
              required
            />
            <TextareaField
              name={"short_description"}
              label="Short Description"
              cols="30"
              rows="2"  
              placeholder="Short Describe about place here "
              register={register("short_description", {
                required: "This filed is required",
              })}
              error={errors["short_description"]}
              required
            />
             <TextareaField
              name={"description"}
              label="Description"
              cols="30"
              rows="3"              placeholder="Describe about place here "
              register={register("description", {
                required: "This filed is required",
              })}
              error={errors["description"]}
              required
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-gray-700 py-5 ">
          <Button text="Save planner" />
        </div>
      </form>
    </div>
  );
};

export default MakePlanner;
