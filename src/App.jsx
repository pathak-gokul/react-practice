import {createRoot} from "react-dom/client";
import React from "react";
import Pet from "./Pet";

const App = () => {
  return (<div>
    <h1>Adpot Me!</h1>
   <Pet sound="bau bau" gg="is" type="dog"/>
  </div>)
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
