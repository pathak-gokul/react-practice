import { MouseEvent } from "react";
function ListGroup() {
  let Items = ["Nepal", "India", "America", "Switerland", "Germany"];
  // Items = [];

  // const getMessage = () => {
  //   return Items.length === 0 ? <p>No items found.</p> : Null;
  // };

  // if (Items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>;
  //     </>
  //   );
  //evenet handler ->
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      {/* {Items.length === 0 ? <p>No items found.</p> : Null} */}
      {Items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {Items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log("Clicked " + item)}
            // onClick={(event) => console.log(event)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
