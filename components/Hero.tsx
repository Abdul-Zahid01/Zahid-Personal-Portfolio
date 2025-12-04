import React, { useState, useEffect, useRef } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { HERO_VIDEO_URL, HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-black">
      {/* Background Video Wrapper */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
         <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            autoPlay
            loop
            muted // Start muted for autoplay policies
            playsInline
            onCanPlay={handleVideoLoad}
            className="w-full h-full object-cover"
          />
      </div>

      {/* Fallback Image if video is slow (Visible until video loads) */}
      <div className={`absolute inset-0 w-full h-full bg-black transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full bg-gradient-to-br from-black to-zinc-900 flex items-center justify-center">
             <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 z-20 pt-20">
        <div className="max-w-2xl animate-fade-in-up">
           {/* Netflix-style "N" or Series Logo equivalent */}
           <div className="flex items-center space-x-2 mb-4">
              <span className="text-red-600 font-black text-4xl tracking-widest">N</span>
              <span className="text-zinc-300 tracking-[0.2em] text-sm font-bold uppercase">Series</span>
           </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            {HERO_DATA.title}
          </h1>

          <div className="flex items-center space-x-4 mb-6 text-sm md:text-base text-green-400 font-bold">
            <span>98% Match</span>
            <span className="text-zinc-300 font-normal">2024</span>
            <span className="border border-zinc-500 px-1 text-xs text-zinc-300 rounded uppercase">HD</span>
            <span className="text-zinc-300 font-normal">5 Seasons</span>
          </div>

          <p className="text-lg md:text-xl text-zinc-100 mb-8 leading-relaxed drop-shadow-md max-w-lg">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-row space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-white text-black rounded font-bold hover:bg-zinc-200 transition-colors text-lg lg:px-8">
              <Play className="w-6 h-6 mr-2 fill-current" />
              Play Resume
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-zinc-600/80 text-white rounded font-bold hover:bg-zinc-600/60 transition-colors text-lg backdrop-blur-sm lg:px-8">
              <Info className="w-6 h-6 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Mute/Age Rating Button */}
      <div className="absolute right-0 bottom-[20%] md:bottom-[30%] flex items-center z-30">
          <button
            onClick={toggleMute}
            className="w-10 h-10 border border-zinc-500 rounded-full flex items-center justify-center text-white bg-black/30 hover:bg-white/10 backdrop-blur-md mr-4 transition-all"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <div className="bg-zinc-800/60 backdrop-blur border-l-2 border-white pl-4 pr-12 py-1 text-white text-sm">
            TV-MA
          </div>
      </div>
    </div>
  );
};

export default Hero;