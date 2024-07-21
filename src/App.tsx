// import Message from "./Message"
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["Nepal", "India", "America", "Switerland", "Germany"];
  // return <div><Message/></div>
  //props: input passed  to a componenet similar to function args immutable
  //state data managed by a componeent similar to local variable mutable
  const [alertVisible, setAlertVisiblity] = useState(false);
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && (
        <div>
          <Alert onClose={() => setAlertVisiblity(false)}>
            Cities fetched successfully!!
          </Alert>
        </div>
      )}
      <div>
        <Button onClick={() => setAlertVisiblity(true)}>My Button</Button>
        {/* <Button onClick={() => console.log("clicked")}>My Button</Button> */}
      </div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}
export default App;
