// import Message from "./Message"
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Nepal", "India", "America", "Switerland", "Germany"];
  // return <div><Message/></div>
  //props: input passed  to a componenet similar to function args immutable
  //state data managed by a componeent similar to local variable mutable
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}
export default App;
