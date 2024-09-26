import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
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
          <div className="max-w-5xl mx-auto w-[90%]">
            <Routes>
              <Route path="details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
