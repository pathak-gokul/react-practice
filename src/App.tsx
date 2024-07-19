// import Message from "./Message"
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Nepal", "India", "America", "Switerland", "Germany"];
  // return <div><Message/></div>
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}
export default App;
