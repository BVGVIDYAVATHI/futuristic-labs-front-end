import React, { useState } from 'react';

const VideoEmbedComponent = () => {
  const [url, setUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');

  return (
    <div className="video-embed-component">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Video URL"
      />
      <iframe
        width="560"
        height="315"
        src={url}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbedComponent;
