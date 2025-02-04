import { useState } from "react";
import {  FaRegEye, FaRegEyeSlash, FaUpload } from "react-icons/fa";

const ProfileCoach = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white shadow-lg rounded-xl dark:bg-gray-900 transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl text-[#090933] font-[lufga]  ">General</h2>
        <div className="space-x-4">
        <button className="px-6 py-2 rounded-full border text-[#FC5185] bg-pink-100 hover:bg-pink-200 transition font-[lufga]">Cancel</button>
        <button className="px-6 py-2 rounded-full bg-[#193AF9] text-white hover:bg-[#193AF9] transition font-[lufga]">Save</button>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="mb-8 flex items-center space-x-6">
        <div className="w-1/4">
        <label className="text-[#7C829C] text-sm w-1/4 font-[lufga]">Avatar</label>
          <p className="text-xs text-[#7C829C]  ">Lorem ipsum is here</p>
        </div>
        <div className="flex-1 flex items-center space-x-6">
          <img src="src/assets/images/avatar.svg" alt="Avatar" className="w-158 h-158 rounded-lg object-cover  font-[lufga]" />
          <div className="flex flex-col space-y-2">
            <button className="flex items-center px-5 py-2 rounded-full border border-gray-300 font-[lufga] text-gray-700 hover:bg-gray-100 transition">
              <FaUpload className="mr-2" /> Upload
            </button>
            <span className="text-xs font-[lufga] text-[#7C829C]">Upload a picture (PNG, JPEG)</span>
            <div className="flex space-x-2">
              <button className="px-5 py-2 font-[lufga] rounded-full border text-[#FC5185] bg-pink-100 hover:bg-pink-200 transition">Discard</button>
              <button className="px-5 py-2 rounded-full font-[lufga] bg-[#193AF9] text-white hover:bg-[#0F2AC9] transition">Save</button>
            </div>
          </div>
        </div>
      </div>

        
    {/* Username Section */}
    <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] font-[lufga] text-sm w-1/4">Username</label>
        <div className="flex-1 flex font-[lufga]  rounded-lg overflow-hidden border border-[#2C3D85]/20">
          <span className="px-4 py-3 bg-[#4772FF]/10 font-[lufga]  border border-[#2C3D85]/20 text-[#090933] font-medium flex items-center justify-center w-1/4">Proway.ai/</span>
          <div className="w-3/4">
            <input type="text" placeholder="@username" className="w-full bg-transparent font-[lufga] outline-none p-3 text-lg" />
          </div>
        </div>
      </div>


    {/* Phone Number Section */}
    <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] text-sm w-1/4 font-[lufga]">Phone Number</label>
        <div className="flex-1 flex items-center bg-[#7C829C]/10 font-[lufga] rounded-lg p-3">
          <select className="w-1/6 border-none bg-transparent font-semibold text-[#193AF9] font-[lufga] outline-none text-center">
            <option value="+970">+970</option>
            <option value="+1">+1</option>
            <option value="+33">+33</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
            <option value="+212">+212</option>
          </select>
          <span className="text-gray-400 font-[lufga] mx-2">|</span>
          <input type="text" placeholder="599 - 288 1370" className="w-5/6 border-none font-[lufga] bg-transparent text-gray-500 outline-none" />
        </div>
      </div>

      {/* Email Section */}
      <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] font-[lufga] text-sm w-1/4">Email</label>
        <input type="email" placeholder="eg. username@proway.ai" className="flex-1 p-3 border font-[lufga] rounded-lg bg-[#7C829C]/5" />
      </div>

      {/* Description Section */}
      <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm w-1/4">Description</label>
        <textarea placeholder="Please enter description here..." className="flex-1 p-3 border font-[lufga] rounded-lg bg-[#7C829C]/5 h-28 border-blue-400"></textarea>
      </div>
    
      {/* Security Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-[lufga] text-[#090933] mb-4">Security</h2>
        <p className="text-sm text-[#7C829C] mb-6 font-[lufga]">Lorem ipsum is here</p>
        
        {/* Password */}
        <div className="mb-6 flex items-center">
          <label className="text-[#7C829C] dark:text-gray-300 text-sm w-1/4 font-[lufga]">Password</label>
          <div className="flex-1 relative">
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" className="w-full font-[lufga] p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 pr-10" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        
        {/* Confirm Password */}
        <div className="mb-6 flex items-center">
          <label className="text-[#7C829C] font-[lufga] text-sm w-1/4">Confirm Password</label>
          <div className="flex-1 relative">
            <input type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className="w-full p-3 font-[lufga] border border-red-400 rounded-lg bg-red-100 dark:bg-gray-800 pr-10" />
            <button className="absolute  right-3 top-1/2 -translate-y-1/2 text-[#FC5185]" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              {confirmPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
      </div>
  {/* Notifications Section */}
  <div className="mt-10">
        <h2 className="text-2xl font-[lufga] text-[#090933] dark:text-white mb-4">Notifications</h2>
        <p className="text-sm font-[lufga] text-[#7C829C] mb-6">Lorem ipsum is here</p>
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm w-1/4">Email Notifications</label>
            <input type="checkbox" className="w-3 h-3 rounded text-blue-600" />
          </div>
          <div className="flex items-center">
            <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm w-1/4">App Notifications</label>
            <input type="checkbox" className="w-3 h-3 rounded text-blue-600" />
          </div>
          <div className="flex items-center">
            <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm w-1/4">Chat Notifications</label>
            <input type="checkbox" className="w-3 h-3 rounded text-blue-600" />
          </div>
        </div>
      </div>

      {/* Region & Language Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-[lufga]  text-[#090933] dark:text-white mb-4">Region & Language</h2>
        <p className="text-sm text-[#7C829C] mb-6 font-[lufga]">Lorem ipsum is here</p>
        <div className="mb-6 flex items-center">
          <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm w-1/4">Region</label>
          <select className="flex-1 p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 ">
            <option>Select your region</option>
          </select>
        </div>
        <div className="mb-6 flex items-center">
          <label className="text-[#7C829C] dark:text-gray-300 font-[lufga] text-sm w-1/4">Language</label>
          <select className="flex-1 p-3 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
 {/* Appearances Section */}
 <div className="mt-10">
        <h2 className="text-2xl font-[lufga] text-[#090933] dark:text-white">Appearances</h2>
        <p className="text-[#7C829C] font-[lufga] text-sm mb-2">Would you have to change the appearances of light and switch it to dark mode, light mode.</p>
        <div className="flex items-center space-x-6 mb-4">
          <div className="w-1/1">
            <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-sm">Appearances</label>
            <p className="text-xs text-[#7C829C]">Lorem ipsum is here</p>
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <img src="src/assets/images/light-mode.svg" className="w-288 h-185 rounded-lg " alt="Light Mode" />
              <label className="flex items-center space-x-2 cursor-pointer mt-2">
                <input 
                  type="radio" 
                  name="mode" 
                  checked={!darkMode} 
                  onChange={() => setDarkMode(false)} 
                  className="w-5 h-5 text-blue-600" 
                />
                <span className="text-sm font-medium text-[#090933] font-[lufga]">Light Mode</span>
              </label>
            </div>
            <div className="flex flex-col items-center">
              <img src="src/assets/images/dark-mode.svg" className="w-288 h-185 rounded-lg " alt="Dark Mode" />
              <label className="flex items-center space-x-2 cursor-pointer mt-2">
                <input 
                  type="radio" 
                  name="mode" 
                  checked={darkMode} 
                  onChange={() => setDarkMode(true)} 
                  className="w-5 h-5 text-blue-600" 
                />
                <span className="text-sm font-medium font-[lufga] text-[#090933]">Dark Mode</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCoach;
