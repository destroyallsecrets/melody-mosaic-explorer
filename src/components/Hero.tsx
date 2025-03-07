
import React, { useEffect, useRef } from 'react';
import { Play, SkipForward, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const audioWavesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const initializeWaveAnimation = () => {
      if (!audioWavesRef.current) return;
      
      const waveElements = audioWavesRef.current.children;
      for (let i = 0; i < waveElements.length; i++) {
        (waveElements[i] as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      }
    };
    
    initializeWaveAnimation();
  }, []);

  return (
    <section className="relative pb-20 pt-40 md:pt-48 md:pb-32 overflow-hidden">
      {/* Gradient Orb Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl opacity-60 animate-float" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 blur-3xl opacity-50" />
      </div>
      
      <div className="container px-6 mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2 animate-fade-in">
            Discover new sounds
          </span>
          
          <h1 className="h1 animate-slide-up">
            Your Music, Reimagined
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Explore melodies that move you through a beautiful, immersive experience designed to highlight what matters most.
          </p>
          
          {/* Call-To-Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-slide-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <button className="btn-hover bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-primary/25">
              <Play className="h-5 w-5" />
              <span>Start Listening</span>
            </button>
            
            <button className="btn-hover bg-white dark:bg-black px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-800">
              <SkipForward className="h-5 w-5" />
              <span>Skip to Albums</span>
            </button>
          </div>
        </div>
        
        {/* Audio Visualizer */}
        <div 
          className="mt-16 md:mt-20 relative w-full max-w-3xl mx-auto glass py-8 px-6 rounded-xl shadow-xl border border-white/20 dark:border-white/10 animate-scale-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-16 bg-black/5 dark:bg-white/5 blur-xl rounded-full"></div>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-semibold text-lg">Symphony in Motion</h3>
              <p className="text-sm text-muted-foreground">Ambient Orchestra</p>
            </div>
            <button className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200">
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
          
          {/* Audio Waves Visualization */}
          <div 
            ref={audioWavesRef}
            className="h-20 w-full flex items-center justify-center gap-1.5"
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 bg-primary/80 rounded-full transform origin-bottom transition-all duration-300",
                  i % 2 === 0 ? "h-12 animate-wave-1" : "h-10 animate-wave-2",
                  i % 3 === 0 && "h-16 animate-wave-3",
                  i % 5 === 0 && "h-14 animate-wave-4"
                )}
              ></div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-6 overflow-hidden">
            <div className="h-full w-[65%] bg-primary rounded-full"></div>
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>1:45</span>
            <span>2:56</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
