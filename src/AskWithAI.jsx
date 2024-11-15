import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const AskWithAI = () => {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6 md:h-screen">
        {/* Logo */}
        <img
          src="images/logo-mindsetters.png"
          alt="Mind Setters Academy"
          className="w-30 mb-6 mx-auto md:mx-0"
          title="back to dashboard"
        />
        {/* Recent Chats */}
        <h2 className="text-lg font-semibold text-gray-700 text-center md:text-left">
          Recent chats
        </h2>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center space-x-2 text-gray-700 truncate hover:bg-gray-300 px-4 py-1 rounded-full cursor-pointer">
            <Icon
              icon="bi:chat-left-fill"
              color="black"
              height={25}
              width={25}
            />
            <p className="truncate">How many classes are online?</p>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 truncate hover:bg-gray-300 px-4 py-1 rounded-full cursor-pointer">
            <Icon
              icon="bi:chat-left-fill"
              color="black"
              height={25}
              width={25}
            />
            <p className="truncate">How many classes are online?</p>
          </li>
          {/* Add more chat items as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-10">
        {/* Suggestions */}
        <div className="flex flex-col items-center w-full max-w-3xl p-6">
          <div className="mb-6 text-green-600">
            <Icon
              icon="solar:sun-2-line-duotone"
              width={64}
              height={64}
              color="blue"
            />
          </div>
          <h2 className="mb-8 text-xl font-semibold text-blue-600">
            Suggestions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <button className="py-5 text-center text-gray-700 bg-white rounded-lg shadow-lg hover:bg-gray-100">
              How many classes are online?
            </button>
            <button className="py-5 text-center text-gray-700 bg-white rounded-lg shadow-lg hover:bg-gray-100">
              How many users are there?
            </button>
            <button className="py-5 text-center text-gray-700 bg-white rounded-lg shadow-lg hover:bg-gray-100">
              What are different course categories available?
            </button>
            <button className="py-5 text-center text-gray-700 bg-white rounded-lg shadow-lg hover:bg-gray-100">
              How many courses are there?
            </button>
          </div>
        </div>

        {/* Input with Send Icon */}
        <div className="relative mt-8 w-full max-w-4xl mt-auto">
          <input
            ref={inputref}
            type="text"
            placeholder="Ask AI"
            className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full pr-12 focus:outline-none focus:ring focus:ring-indigo-700 animate-pulse"
          />
          <button className="absolute inset-y-0 right-0 flex items-center justify-center pr-4 text-indigo-500 hover:text-indigo-600 ">
            <Icon
              icon="material-symbols:send"
              color="blue"
              height={25}
              width={25}
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default AskWithAI;
