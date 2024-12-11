import { createRoot } from "react-dom/client";
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { useState } from "react";
import LoginPage from "./LoginPage";
import LoginPage2 from "./LoginPage2";
import AskWithAI from "./AskWithAI";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        {/* <header className="max-w-5xl mx-auto py-8 border-b border-b-gray-900/10 mb-16">
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
          </header> */}
        <div className="">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login2" element={<LoginPage2 />} />
            <Route path="/ask" element={<AskWithAI />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
