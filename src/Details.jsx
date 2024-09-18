import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
const Details = () => {
  const { id } = useParams();
  // console.log("hi");
  const results = useQuery(["Details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="">
        <h2 className="">🎇</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 ">
      <div className="mb-8 sm:mb-0 overflow-hidden columns-[150px]">
        {pet.images.map((src) => (
          <img
            key={src}
            src={src}
            alt={pet.name}
            className="rounded-md hover:scale-110 transition-all duration-300 w-full mb-4"
          />
        ))}
      </div>
      <div className="sm:flex">
        <div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {pet.name}
              </h3>
              <p className="text-xl font-semibold text-gray-900 sm:text-3xl">
                {pet.city} - {pet.state}
              </p>
            </div>
            <div>
              <button className="bg-indigo-600 rounded-xl p-2 text-white mt-2 hover:bg-indigo-800 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Adpot Me
              </button>
            </div>
          </div>
          <hr className="my-6 md:my-8 border-gray-200" />
          <p className="text-gray-500 text-justify">{pet.description}</p>

          <p className="text-gray-500 text-justify mt-3">{pet.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
