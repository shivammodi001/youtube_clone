import { useEffect, useState } from "react";
import { toggleMenu } from "../util/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../util/constant";

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery) getSearchSuggestion();
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    async function getSearchSuggestion() {
        const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await response.json();
        setSuggestion(data[1]);
    }

    const dispatch = useDispatch();
    function toggleMenuHanlder() {
        dispatch(toggleMenu());
    }

    return (
        <div className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="grid grid-cols-3 items-center px-4 py-2 max-w-[1540px] mx-auto">
                
                {/* Logo + Menu */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <img 
                        alt="menu" 
                        src="https://www.svgrepo.com/show/489508/menu-burger-horizontal.svg" 
                        className="w-6 h-6 cursor-pointer hover:opacity-75"
                        onClick={toggleMenuHanlder}
                    />
                    <img 
                        alt="youtube-logo" 
                        src="https://www.svgrepo.com/show/303300/new-youtube-logo-logo.svg" 
                        className="w-20 h-auto"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex justify-center relative">
                    <div className="flex w-full max-w-[600px] items-center">
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)} //This runs when the input field is clicked or focused (like when a user taps or tabs into it).
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // delay to allow click
                        />
                        <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                    </div>

                    {/* Suggestion Box */}
                    {showSuggestions && suggestion.length > 0 && (
                        <div className="absolute bg-white top-full mt-1 w-full max-w-[600px] p-3 shadow-lg rounded-md border border-gray-200 z-40">
                            <ul>
                                {suggestion.map((item, index) => (
                                    <li key={index} className="py-2 px-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* User Icon */}
                <div className="flex justify-end">
                    <img 
                        alt="user-icon" 
                        src="https://cdn-icons-png.flaticon.com/512/64/64572.png" 
                        className="w-9 h-9 rounded-full cursor-pointer hover:opacity-75"
                    />
                </div>

            </div>
        </div>
    );
}

export default Header;
