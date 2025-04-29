import React from 'react';

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                alt="video"
                src={thumbnails.high.url}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
                <p className="text-gray-600 text-sm mt-1">{channelTitle}</p>
                <ul className="mt-2 text-gray-500 text-sm space-y-1">
                    <li>Views: {statistics.viewCount}</li>
                    <li>Likes: {statistics.likeCount}</li>
                </ul>
            </div>
        </div>
    );
};
//higer order function : it take a function as an argument and returns a new function
export const AddVideoCard = ({info}) =>{
    return(
        <div className='border border-red-900 p-1 m-1'>
            <VideoCard info={info} />
        </div>
    )
}

// debouncing : it is used to prevent the function from being called multiple times in a short period of time
// if typing speed is fast then it will call the function not for every key press 
//if typing speed is slow then it will call the function for every key stroke

// example of debouncing with 200ms: 
// if difference between two key press is < 200ms -> decline API call
// if difference between two key press is > 200ms -> make API call

//Performance : it is used to measure the performance of the application 


export default VideoCard;


