import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import { Icon } from "@iconify/react";
import CardLoader from "./components/ui/loader/CardLoader";
import ErrorBoundary from "./ErrorBoundary";
import AdpotMeDialog from "./AdpotMeDialog";

const Details = () => {
  const { id } = useParams();
  // console.log("hi");
  const results = useQuery(["Details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="">
        <CardLoader c={6} />
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 ">
      <div className="mb-8">
        {/* {pet.images.map((src) => (
          <img
            key={src}
            src={src}
            alt={pet.name}
            className="rounded-md hover:scale-110 transition-all duration-300 w-full mb-4"
          />
        ))} */}
        <Carousel images={pet.images} />
      </div>
      <div className="sm:flex">
        <div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {pet.name}
              </h3>
              <div className="flex items-center mt-3 gap-2">
                <Icon
                  icon="ion:location-outline"
                  fontSize={22}
                  className="text-green-600"
                />
                <p className="">
                  {pet.city} - {pet.state}
                </p>
              </div>
            </div>
            <div>
              {/* <button
                className="bg-indigo-600 rounded-xl p-2 text-white mt-2 hover:bg-indigo-800 flex gap-2 items-center"
                onClick={() => setShowModal(true)}
              >
                <Icon icon="gg:add" fontSize={22} />
                Adpot Me
              </button> */}
              <AdpotMeDialog name={pet.name} />
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

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
