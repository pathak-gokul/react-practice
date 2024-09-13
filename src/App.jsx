import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header className="max-w-5xl mx-auto py-8 border-b border-b-gray-900/10 mb-16">
        <Link to="/" className="text-center">
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              src="https://pathakgokul.com.np/Gokul/assets/img/favicon.png"
              alt="g"
            />
            <h1 className="text-blue-800">-Technology</h1>
          </div>
        </Link>
      </header>
      <div className="max-w-5xl mx-auto ">
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
