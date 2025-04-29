import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className={"min-h-96 bg-white shadow-md p-3 w-[25%]"}>
      {/* Main Navigation */}
      <div className="mb-6">
        <ul className="space-y-2">
          <li className="hover:bg-gray-100 rounded-lg cursor-pointer">
            <Link to="/" className="flex items-center p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                alt="home"
                className="w-6 h-6 mr-4 text-gray-600"
              />
              <span>Home</span>
            </Link>
          </li>

          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3260/3260698.png"
              alt="explore"
              className="w-6 h-6 mr-4 text-gray-600"
            />
            <span>Explore</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
              alt="subscriptions"
              className="w-6 h-6 mr-4 text-gray-600"
            />
            <span>Subscriptions</span>
          </li>
        </ul>
      </div>

      {/* Subscriptions Section */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <h1 className="px-2 pb-2 text-sm font-semibold text-gray-800 uppercase">
          Subscriptions
        </h1>
        <ul className="space-y-2">
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3142/3142528.png"
              alt="movies"
              className="w-6 h-6 rounded-full mr-3"
            />
            <span>Movies</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3293/3293466.png"
              alt="sports"
              className="w-6 h-6 rounded-full mr-3"
            />
            <span>Sports</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
              alt="music"
              className="w-6 h-6 rounded-full mr-3"
            />
            <span>Music</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4470/4470960.png"
              alt="gaming"
              className="w-6 h-6 rounded-full mr-3"
            />
            <span>Gaming</span>
          </li>
        </ul>
      </div>

      {/* Watch Later Section */}
      <div className="border-t border-gray-200 pt-4">
        <h1 className="px-2 pb-2 text-sm font-semibold text-gray-800 uppercase">
          Watch Later
        </h1>
        <ul className="space-y-2">
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
              alt="watch later"
              className="w-6 h-6 mr-4 text-gray-600"
            />
            <span>Saved Videos</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
              alt="history"
              className="w-6 h-6 mr-4 text-gray-600"
            />
            <span>History</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
