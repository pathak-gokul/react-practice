import { useState, useContext } from "react";
// import Pet from "./Pet";
import AdoptedPetContext from "./AdoptedPetContext";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import CardLoader from "./components/ui/loader/CardLoader";
import { Icon } from "@iconify/react";
const Animals = ["elephant", "cat", "dog", "rat", "rabbit", "bird", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  console.log(requestParams);
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params bg-white">
      {adoptedPet ? (
        <div className="flex">
          <p>Adopted Pets are:</p>
          <div className="shadow-md w-20 h-20 rounded-full overflow-hidden mx-3 ">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        </div>
      ) : null}
      <form
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location" className="block">
          Location
          <input
            name="location"
            id="location"
            placeholder="Location"
            className="w-full border border-slate-400 px-3 py-1 rounded-sm focus:outline-none focus:ring-indigo-500 focus:ring-1"
          />
        </label>
        <label htmlFor="animal" className="block">
          Animal
          <select
            id="animal"
            value={animal}
            className="w-full border border-slate-400 px-3 py-1 rounded-sm"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {Animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed" className="block">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            name="breed"
            className="w-full border border-slate-400 px-3 py-1 rounded-sm"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="w-full bg-indigo-600 text-white px-6 py-1 rounded-md flex gap-2 items-center justify-center">
          <Icon icon="ic:round-send" fontSize={22} />
          Submit
        </button>
      </form>
      {/* <div className="grid grid-cols-3 gap-6 mt-16">
        {pets.map((pet) => (
          <Pet
            animal={pet.animal}
            city={pet.city}
            name={pet.name}
            key={pet.id}
            image={pet.images.at(0)}
          />
        ))}
      </div> */}
      <br />
      <div className="">
        {results.isLoading ? <CardLoader /> : <Results pets={pets} />}
      </div>
    </div>
  );
};
export default SearchParams;
