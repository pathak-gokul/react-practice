import { useState, useEffect } from "react";
// import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";
const Animals = ["elephant", "cat", "dog", "rat", "rabbit", "bird", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await res.json();
    setPets(json.pets);
  }
  console.log(pets.at(0));
  return (
    <div className="search-params bg-white">
      <form
        className="shadow-md rounded-md p-8 px-16 grid grid-cols-3 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location" className="block">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
            className="w-full border border-slate-400 px-3 py-1 rounded-sm"
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
              setBreed("");
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
            value={breed}
            className="w-full border border-slate-400 px-3 py-1 rounded-sm"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="w-full bg-indigo-600 text-white px-6 py-1 rounded-md">
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
        <Results pets={pets} />
      </div>
    </div>
  );
};
export default SearchParams;
