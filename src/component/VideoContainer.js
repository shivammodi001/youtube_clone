import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../util/constant';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        try {
            const response = await fetch(YOUTUBE_VIDEOS_API);
            const data = await response.json();
            setVideos(data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
           { videos[0] && <AddVideoCard info={videos[0]} />}

            {loading ? (
                <p className="col-span-full text-center text-gray-500">Loading videos...</p>
            ) : (
                videos.map((video) => (
                    <Link
                    key={video.id?.videoId || video.etag}
                    to={`/watch?v=${video.id?.videoId || video.id}`}
                >
                    <VideoCard 
                        key={video.id?.videoId || video.etag || Math.random()} 
                        info={video} 
                    />
                </Link>
                ))
            )}
        </div>
    );
};


export default VideoContainer;
