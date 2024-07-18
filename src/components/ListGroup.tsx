// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  const Items = ["Nepal", "India", "America", "Switerland", "Germany"];
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
  // const handleClick = (event: MouseEvent) => console.log(event);

  // let selectedIndex = 0;

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; //variable(selectedIndex)
  // arr[1]; //updater fucntion
  // const [name, setName] = useState("");
  return (
    <>
      <h1>List Group</h1>
      {/* {Items.length === 0 ? <p>No items found.</p> : Null} */}
      {Items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {Items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked " + item)}
            // onClick={(event) => console.log(event)}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
