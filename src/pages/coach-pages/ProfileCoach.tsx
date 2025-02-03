import { useState } from "react";
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ProfileCoach = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">General</h2>
        <div className="space-x-2">
          <button className="px-4 py-1.5 rounded-full border border-pink-500 text-pink-500">Cancel</button>
          <button className="px-4 py-1.5 rounded-full bg-blue-600 text-white">Save</button>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="mb-8">
        <label className="text-sm text-gray-500 mb-2">Avatar</label>
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/80" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
          <div className="flex flex-col">
            <div className="flex space-x-2">
              <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700">Upload</button>
              <button className="px-4 py-1.5 rounded-full bg-blue-600 text-white">Save</button>
            </div>
            <span className="text-xs text-gray-500 mt-1">Upload picture (PNG, JPG)</span>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500">Username</label>
          <div className="flex items-center space-x-2 mt-1">
            <input type="text" placeholder="Proway.ai" className="flex-1 p-2 border rounded-lg" />
            <span className="text-gray-500">@username</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-500">Phone Number</label>
          <div className="flex space-x-2 mt-1">
            <input type="text" placeholder="+970" className="w-20 p-2 border rounded-lg" />
            <input type="text" placeholder="599 - 288 1370" className="flex-1 p-2 border rounded-lg" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input type="email" placeholder="eg. username@proway.ai" className="w-full p-2 border rounded-lg mt-1" />
        </div>

        <div>
          <label className="text-sm text-gray-500">Description</label>
          <textarea 
            placeholder="Please enter description here..." 
            className="w-full p-2 border rounded-lg mt-1 h-24"
          ></textarea>
        </div>
      </div>

      {/* Security Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Password</label>
            <div className="relative mt-1">
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Password" 
                className="w-full p-2 border rounded-lg pr-10" 
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" 
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500">Confirm Password</label>
            <div className="relative mt-1">
              <input 
                type={confirmPasswordVisible ? "text" : "password"} 
                placeholder="Confirm Password" 
                className="w-full p-2 border border-red-400 rounded-lg pr-10" 
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" 
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <p className="text-red-500 text-xs mt-1">Error line is here</p>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
            <span className="text-sm">Email Notifications</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
            <span className="text-sm">App Notifications</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
            <span className="text-sm">Chat Notifications</span>
          </label>
        </div>
      </div>

      {/* Region & Language Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Region & Language</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Region</label>
            <select className="w-full p-2 border rounded-lg mt-1">
              <option>Select your region</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-500">Language</label>
            <select className="w-full p-2 border rounded-lg mt-1">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Appearances</h2>
        <p className="text-gray-500 text-sm mb-6">
          Would you have to change the appearances of light and switch it to dark mode, light mode.
        </p>

        <div className="flex items-center space-x-6">
          {/* Light Mode */}
          <button
            className={`relative p-4 rounded-lg border ${!darkMode ? "border-blue-500" : "border-gray-300"} flex flex-col items-center`}
            onClick={() => setDarkMode(false)}
          >
            <div className="w-28 h-16 bg-gray-100 rounded-lg shadow-inner border border-gray-300 flex items-center justify-center">
              <div className="w-20 h-10 bg-white rounded-md shadow"></div>
            </div>
            <span className="text-sm mt-2 font-medium">Light Mode</span>
            {!darkMode && (
              <FaCheckCircle className="absolute -bottom-4 text-blue-500 text-lg" />
            )}
          </button>

          {/* Dark Mode */}
          <button
            className={`relative p-4 rounded-lg border ${darkMode ? "border-blue-500" : "border-gray-300"} flex flex-col items-center`}
            onClick={() => setDarkMode(true)}
          >
            <div className="w-28 h-16 bg-gray-800 rounded-lg shadow-inner border border-gray-600 flex items-center justify-center">
              <div className="w-20 h-10 bg-gray-700 rounded-md shadow"></div>
            </div>
            <span className="text-sm mt-2 font-medium">Dark Mode</span>
            {darkMode && (
              <FaCheckCircle className="absolute -bottom-4 text-blue-500 text-lg" />
            )}
          </button>
        </div>
        </div>
  );
};

export default ProfileCoach;
