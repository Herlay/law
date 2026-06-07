import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import companysLogo from "../assets/companyLogo.png";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";

// 1. VideoPlayer mini-component
const VideoPlayer = ({ video, isActive, onPlay }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 2. If another video starts playing (isActive becomes false), pause this one!
  useEffect(() => {
    if (!isActive && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  // 3. Unified click handler: Plays if paused, Pauses if playing
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        onPlay(); 
      }
    }
  };

  const handleNativePlay = () => {
    setIsPlaying(true);
    onPlay();
  };
  
  const handleNativePause = () => setIsPlaying(false);

  return (
    <div 
      className="relative rounded-none rounded-br-[4rem] overflow-hidden group w-full shadow-md bg-black cursor-pointer"
      onClick={togglePlay} // Clicking anywhere on the video or overlay toggles play/pause
    >
      <video 
        ref={videoRef}
        src={video.thumbnail} 
        className={`w-full h-[250px] object-cover transition duration-700 ease-in-out ${!isPlaying ? 'group-hover:scale-105' : ''}`}
        playsInline
        preload="metadata"
        /* The `controls` attribute has been intentionally removed here */
        onPlay={handleNativePlay}
        onPause={handleNativePause}
      />
      
      {/* Custom overlay hides instantly when playing, reappears when paused */}
      {!isPlaying && (
       <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          {/* Replaced group-hover:bg-brand-yellow with group-hover:bg-black/60 */}
          <div className="w-24 h-16 bg-[#1a1a1a]/90 flex items-center justify-center group-hover:bg-black/60 transition duration-300">
            <Play fill="white" stroke="white" size={36} className="ml-2" />
          </div>
        </div>
      )}
    </div>
  );
};

const MediaAndVideos = () => {
  // 4. State in the parent to track WHICH video is currently active
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-4 md:px-16 z-40 relative">
      
     {/* Logos Section */}
      <div className="flex w-full justify-center items-center mb-20">
        <img 
          src={companysLogo} 
          alt="Company_Logos" 
          className="w-full h-auto object-contain" 
        />
      </div>

    {/* Video Section - Stretched Full Width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-15">
        
        {/* Left Side: Text and Button */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-1 flex flex-col justify-center"
        >
          <h2 className="text-6xl font-cursive text-brand-yellow mb-4">Watch</h2>
          <p className="text-gray-600 text-[1rem] font-light mb-6 text-lg">
            Learn about what to do if you’re a victim of fraud, <br />how we are paid, and how long the process takes.
          </p>
          <button className="group flex items-center text-gray-800 cursor-pointer font-bold hover:text-red-600 transition duration-300">
            <span className="bg-gray-800 group-hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs transition duration-300">i</span>
            Get More Answers
          </button>
        </motion.div>

        {/* Right Side: The Videos */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            { title: 'I\'m a Victim of Fraud... Now What?', thumbnail: vid1 },
            { title: 'How Long Does the Process Take?', thumbnail: vid2 }
          ].map((video, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col w-full"
            >
              <h2 className="text-xl md:text-[1rem] font-black tracking-tight text-gray-900 mb-4 leading-tight">
                {video.title}
              </h2>
              
              {/* Pass down the active state and the function to change it */}
              <VideoPlayer 
                video={video} 
                isActive={activeVideoIndex === idx}
                onPlay={() => setActiveVideoIndex(idx)}
              />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAndVideos;