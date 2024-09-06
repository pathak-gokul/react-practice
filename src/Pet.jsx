const Pet = ({ city, animal, name, image }) => {
  return (
    <div className="flex gap-4 border border-slate-300 shadow-sm">
      <div className="border border-red-400 shadow-md w-20 h-20">
        <img src={image} className="w-full h-full" alt={name} />
      </div>
      <div>
        <h1>{animal}</h1>
        <h2>{city}</h2>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
export default Pet;
