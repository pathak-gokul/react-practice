import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setLoginError(null);

    try {
      // Add your login API call here
      // const response = await loginAPI(formData);

      // If successful, redirect
      navigate("/dashboard");
    } catch (error) {
      setLoginError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center h-screen overflow-y-hidden">
      <div className="flex flex-end rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-full xl:mt-10 md:w-1/2 bg-white px-8 py-12">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Welcome Back
            </h2>

            {loginError && (
              <div className="w-full max-w-sm mb-4 p-3 bg-red-100 text-red-700 rounded">
                {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center disabled:bg-blue-300"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600">
              <a href="#" className="text-green-600 hover:text-green-800">
                Forgot Password ?
              </a>
            </p>
            <fieldset className="mt-5 xl:w-96 border-t text-center border-gray-900/20">
              <legend className="px-2 font-bold text-gray-500">or</legend>
              <button
                className=" hover:bg-green-700 hover:text-white text-black font-bold xl:mt-5 py-2 px-4 rounded-full mt-4 outline outline-green-500 outline-1 outline-offset-1 "
                href="/mindsettersacademy.apk"
                target="_blank"
                rel=""
              >
                Get Android app
              </button>
              <p className="text-primary-300 text-xs mt-2">
                Install our app for parents and students.
              </p>
            </fieldset>
            <footer className="max-w-[450px] mx-auto w-full text-sm text-gray-400 mt-6 self-start flex justify-between">
              <div className="flex items-center gap-x-2">
                <a
                  className="hover:text-primary"
                  href="https://mindsetters.sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  © MindSetters
                </a>
                <a
                  className="hover:text-primary"
                  href="https://mindsetters.sg/#about"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
                <a
                  className="hover:text-primary"
                  href="https://mindsetters.sg/#contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </div>
              <p>v0.1.0</p>
            </footer>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="./images/product-demo-image.svg"
            alt="Login illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
