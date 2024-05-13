
"use client"
// components/VideoPlayer.tsx
import { useEffect, useRef, useState } from 'react';

const VideoPlayer: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      if (video) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);
      }
    };

    const handleTimeUpdate = () => {
      updateProgress();
    };

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="relative">
      <video ref={videoRef} controls className="mb-4">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-2 bg-gray-300">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
