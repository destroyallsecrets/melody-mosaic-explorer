
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Play, Pause, SkipBack, SkipForward, 
  Volume2, VolumeX, Repeat, Shuffle, 
  MoreHorizontal, Maximize2, Minimize2
} from 'lucide-react';

interface MusicPlayerProps {
  className?: string;
  minimized?: boolean;
  onToggleMinimize?: () => void;
}

const MusicPlayer = ({ 
  className,
  minimized = false,
  onToggleMinimize
}: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setVolume(value);
    if (value === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div 
      className={cn(
        "glass fixed transition-all duration-400 ease-in-out z-30 shadow-xl border border-white/20 dark:border-white/10",
        minimized 
          ? "bottom-6 right-6 w-16 h-16 rounded-full p-0" 
          : "left-0 right-0 bottom-0 rounded-t-xl p-4",
        className
      )}
    >
      {minimized ? (
        <button 
          onClick={onToggleMinimize}
          className="w-full h-full rounded-full flex items-center justify-center text-primary"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
      ) : (
        <div className="container mx-auto">
          <div className="flex flex-col">
            {/* Progress Bar (top of player) */}
            <div className="w-full h-1 -mt-4 mb-4">
              <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800">
                <div 
                  className="absolute top-0 left-0 h-full bg-primary" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              {/* Song Info */}
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop"
                    alt="Album cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="hidden sm:block">
                  <h4 className="font-medium text-sm">Into the Night</h4>
                  <p className="text-xs text-muted-foreground">Echo Dreams</p>
                </div>
              </div>
              
              {/* Playback Controls */}
              <div className="flex items-center space-x-4">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Shuffle className="h-4 w-4" />
                </button>
                
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipBack className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>
                
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipForward className="h-5 w-5" />
                </button>
                
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Repeat className="h-4 w-4" />
                </button>
              </div>
              
              {/* Progress and Volume Controls */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">1:24</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-24 h-1 appearance-none bg-gray-200 dark:bg-gray-700 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                  />
                  <span className="text-xs text-muted-foreground">3:45</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleMute}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 appearance-none bg-gray-200 dark:bg-gray-700 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                  />
                </div>
                
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={onToggleMinimize}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minimize2 className="h-5 w-5" />
                </button>
              </div>
              
              {/* Mobile Controls */}
              <div className="flex md:hidden items-center space-x-2">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
                
                <button 
                  onClick={onToggleMinimize}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minimize2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
