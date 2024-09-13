import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-5xl mx-auto p-16">
        <h1>Adpot Me!</h1>

        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
