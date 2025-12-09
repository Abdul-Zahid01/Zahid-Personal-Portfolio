import React, { useState, useEffect, useRef } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { HERO_VIDEO_ID, HERO_VIDEO_URL, HERO_DATA } from "../constants";

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle Mute/Unmute for both video types
  useEffect(() => {
    // 1. YouTube IFrame API
    if (HERO_VIDEO_ID && iframeRef.current && iframeRef.current.contentWindow) {
      const action = isMuted ? 'mute' : 'unMute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: action,
        args: []
      }), '*');
    }
    
    // 2. HTML5 Video
    if (HERO_VIDEO_URL && videoRef.current) {
        videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div id="about" className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-black group">

      {/* BACKGROUND VIDEO LOGIC */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* OPTION A: Direct Video URL (Preferred for performance/stability) */}
        {HERO_VIDEO_URL ? (
            <video
                ref={videoRef}
                src={HERO_VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
                onCanPlay={() => setIsVideoLoaded(true)}
                onError={() => {
                    // Fail silently to avoid console spam, just don't show the video
                    console.log("Video load error, ensure URL is valid."); 
                }}
            />
        ) : HERO_VIDEO_ID ? (
        /* OPTION B: YouTube Embed (Fallback) */
            <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1&modestbranding=1&origin=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
            className={`absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
            allow="autoplay; encrypted-media"
            title="Hero Background Video"
            onLoad={() => setIsVideoLoaded(true)}
            />
        ) : null}

      </div>

      {/* LOADING SPINNER (Only shows until video is ready) */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* DARK GRADIENTS FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* CONTENT */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 z-20 pt-20">
        <div className="max-w-2xl animate-fade-in-up">

          {/* Mini Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-red-600 font-black text-4xl tracking-widest">N</span>
            <span className="text-zinc-300 tracking-[0.2em] text-sm font-bold uppercase">Series</span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            {HERO_DATA.title}
          </h1>

          {/* META INFO */}
          <div className="flex items-center space-x-4 mb-6 text-sm md:text-base text-green-400 font-bold">
            <span>98% Match</span>
            <span className="text-zinc-300 font-normal">2024</span>
            <span className="border border-zinc-500 px-1 text-xs text-zinc-300 rounded uppercase">HD</span>
            <span className="text-zinc-300 font-normal">5 Seasons</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-zinc-100 mb-8 leading-relaxed drop-shadow-md max-w-lg">
            {HERO_DATA.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row space-x-4">
            <button className="flex items-center justify-center px-6 py-3 bg-white text-black rounded font-bold hover:bg-zinc-200 transition-colors text-lg lg:px-8">
              <Play className="w-6 h-6 mr-2" />
              Play Resume
            </button>

            <button className="flex items-center justify-center px-6 py-3 bg-zinc-600/80 text-white rounded font-bold hover:bg-zinc-600/60 transition-colors text-lg backdrop-blur-sm lg:px-8">
              <Info className="w-6 h-6 mr-2" />
              More Info
            </button>
          </div>

        </div>
      </div>

      {/* MUTE CONTROL */}
      <div className="absolute right-0 bottom-[20%] md:bottom-[30%] flex items-center z-30">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 border border-zinc-500 rounded-full flex items-center justify-center text-white bg-black/30 hover:bg-white/10 backdrop-blur-md mr-4 transition-all cursor-pointer"
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