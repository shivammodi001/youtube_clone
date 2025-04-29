import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const videoId = queryParams.get('v') || '';
  const title = queryParams.get('title') || 'Untitled Video';
  const description = queryParams.get('description') || 'No description available.';
  const channel = queryParams.get('channel') || 'Unknown Channel';

  const [isFullScreen, setIsFullScreen] = React.useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isFullScreen]);

  if (!videoId) {
    return (
      <div className="flex items-center justify-center h-screen font-sans">
        <h2 className="text-2xl text-gray-800">No video selected</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full">
      {/* Left side: Video + Comments */}
      <div className="flex flex-col w-[65%]">
        <div className={isFullScreen ? "fixed inset-0 bg-black z-50" : "w-full min-h-screen bg-gray-100"}>
          {/* Video Player */}
          <div className={isFullScreen ? "w-full h-full" : "w-full h-[80vh] max-h-[900px] bg-black"}>
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className={isFullScreen ? "w-full h-full" : "w-full h-full rounded-none"}
            />
          </div>

          {/* Video Details */}
          {!isFullScreen && (
            <div className="max-w-7xl mx-auto px-5 py-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
              <p className="text-gray-600 text-lg mb-5">Channel: {channel}</p>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-gray-800 text-base leading-relaxed">{description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Comment Section */}
        {!isFullScreen && <CommentContainer />}
      </div>


      {/* Right side: Live Chat */}
      {!isFullScreen && (
        <div className="w-[30%] h-[calc(100vh-80px)]">
          <LiveChat />
        </div>
      )}
    </div>
  );
};

export default WatchPage;
