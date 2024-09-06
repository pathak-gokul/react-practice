import { createRoot } from "react-dom/client";
import React from "react";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-16">
      <h1>Adpot Me!</h1>
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
