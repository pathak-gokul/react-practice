import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="">
      {!pets.length ? (
        <h1 className="text-center">No pets found.</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {pets.map((pet) => (
            <Pet
              animal={pet.animal}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              image={pet.images.at(0)}
              city={`${pet.city}, ${pet.state}`}
              key={pet.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
