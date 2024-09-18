const CardLoader = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <LoderItem />
      <LoderItem />
      <LoderItem />
      <LoderItem />
      <LoderItem />
      <LoderItem />
    </div>
  );
};

const LoderItem = () => {
  return (
    <div className="flex gap-8 items-center border border-gray-300 p-2 rounded-md">
      <div className="bg-gray-300 h-16 w-16 rounded-sm"></div>
      <div>
        <div className="h-3 w-20 bg-gray-300 mb-2"></div>
        <div className="h-3 w-20 bg-gray-300 mb-2"></div>
        <div className="h-3 w-20 bg-gray-300"></div>
      </div>
    </div>
  );
};
export default CardLoader;
