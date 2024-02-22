import { useState } from "react";
import { useForm } from "react-hook-form";
import TextareaField from "../components/form/TextareaField";
import InputFieLd from "../components/form/InputFieLd";
import Button from "../components/form/Button";
const MakePlanner = () => {
  const [addfield, setAddfield] = useState([""]);

  const handleClick = () => {
    setAddfield((prev) => [...prev, {}]);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dataSubmit = (data, e) => {
    e.preventDefault();
    console.log("Getting values from form submit: ", data);
    reset();
  };

  return (
    <div className="px-40 py-5">
      <h1 className="text-3xl font-semibold text-center mt-5 pb-3 text-gray-600">
        Make a own travel planner
      </h1>
      <form action="" onSubmit={handleSubmit(dataSubmit)}>
        <div className="max-w-2xl mx-auto text-gray-700 bg-medium py-5 px-10 mb-5">
          <InputFieLd
            name="country"
            label="Country name"
            type="text"
            placeholder="Enter country name here..."
            register={register("country", {
              required: "This filed is required",
            })}
            error={errors.country}
            required
          />
        </div>

        <div className="max-w-2xl mx-auto text-gray-700 bg-dark py-5 px-20">
          {addfield.map((filed, index) => {
            // console.log(filed);

            return (
              <div key={index} className="">
                <p className="text-xl font-semibold py-2 text-center">
                  {" "}
                  Tourist spot place No:{index + 1}
                </p>
                <InputFieLd
                  name={`place${index + 1}`}
                  label="Place name"
                  type="text"
                  placeholder="Enter place name here "
                  register={register(`place${index + 1}`, {
                    required: "This filed is required",
                  })}
                  error={errors[`place${index + 1}`]}
                  required
                />
                <InputFieLd
                  name={`photo${index + 1}`}
                  label="Photo"
                  type="text"
                  placeholder="Paste your photo link here!"
                  register={register(`photo${index + 1}`, {
                    required: "This filed is required",
                  })}
                  error={errors[`photo${index + 1}`]}
                  required
                />
                <TextareaField
                  name={`description${index + 1}`}
                  label="Description"
                  placeholder="Describe about place here "
                  register={register(`description${index + 1}`, {
                    required: "This filed is required",
                  })}
                  error={errors[`description${index + 1}`]}
                  required
                />
                <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded " />
              </div>
            );
          })}
          <div className="flex justify-center">
            <div
              className="text-lg p-2 w-fit shadow-2xl cursor-pointer bg-light  rounded flex items-center"
              onClick={handleClick}
            >
              {" "}
              Add Places
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                className="text-green-400 ml-2 items-center flex"
              >
                <path
                  fill="currentColor"
                  d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v3H8q-.425 0-.712.288T7 12q0 .425.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                ></path>
              </svg>
            </div>
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
