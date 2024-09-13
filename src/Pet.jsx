import { Link } from "react-router-dom";
const Pet = ({ city, animal, name, image, id }) => {
  return (
    <div className="flex overflow-hidden rounded-md border border-slate-50 shadow-md hover:translate-y-[3px] transition duration-300">
      <div className="shadow-md w-20 h-20">
        <Link to={`details/${id}`}>
          <img src={image} className="w-full h-full block" alt={name} />
        </Link>
      </div>
      <div className="mx-auto">
        <Item label="Animal Name" value={animal} />
        <Item label="From" value={city} />
        <Item label="Breed" value={name} />
      </div>
    </div>
  );
};
export default Pet;
const Item = ({ label, value }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="block text-sm font-medium text-gray-900">{label}</div>
      <h1 className="text-gray-500">{value}</h1>
    </div>
  );
};
