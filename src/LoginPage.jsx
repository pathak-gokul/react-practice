const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="items-center justify-center gap-0 border-green-300">
        <div className="flex flex-col items-center justify-center">
          <img
            src="./images/logo-mindsetters.png"
            alt="logo"
            className="w-25 h-16"
          />
          <h1 className="mt-8 text-sm font-bold text-gray-900">Sign In</h1>
          <div className="mt-5">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              id="username"
              name="username"
              className="mx-5 border border-slate-400 px-3 py-1 rounded-sm focus:outline-none focus:ring-indigo-500 focus:ring-1"
            ></input>
          </div>
          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="mx-5 mt-5 border border-slate-400 px-3 py-1 rounded-sm focus:outline-none focus:ring-indigo-500 focus:ring-1"
            ></input>
          </div>
          <button className="mt-5 bg-green-600 text-white px-6 py-1 rounded-md flex gap-2 items-center justify-center">
            Login
          </button>
        </div>
      </div>
      <div className=" w-96 overflow-hidden">
        <img
          src="./images/product-demo-image.svg"
          alt="side-showcase"
          className=""
        />
      </div>
    </div>
  );
};
export default LoginPage;
