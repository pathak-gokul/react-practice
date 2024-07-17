function ListGroup() {
  const Items = ["Nepal", "India", "America", "Switerland", "Germany"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {Items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
