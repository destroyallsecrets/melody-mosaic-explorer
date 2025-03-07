
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlbumCardProps {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseYear?: number;
  isFeatured?: boolean;
  onPlay?: () => void;
}

const AlbumCard = ({
  id,
  title,
  artist,
  coverUrl,
  releaseYear,
  isFeatured = false,
  onPlay
}: AlbumCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
    if (onPlay) onPlay();
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/album/${id}`}
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden transition-all duration-400",
        isFeatured ? "shadow-xl" : "hover:shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album Cover */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        {/* Placeholder skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse-slow" />
        )}
        
        {/* Album Image */}
        <img
          src={coverUrl}
          alt={`${title} by ${artist}`}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            imageLoaded ? "opacity-100" : "opacity-0",
            isHovered && "scale-105"
          )}
        />
        
        {/* Overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 transition-opacity duration-300 backdrop-blur-xs",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Play/Pause Button */}
        <button
          onClick={handlePlay}
          className={cn(
            "absolute bottom-3 right-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black shadow-lg",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        
        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-300",
            isFavorite ? "text-red-500" : "text-white",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Heart 
            className={cn("h-5 w-5", isFavorite && "fill-current")}
          />
        </button>
        
        {/* Release Year Tag */}
        {releaseYear && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-black/30 text-white backdrop-blur-sm rounded-md">
            {releaseYear}
          </span>
        )}
      </div>
      
      {/* Album Info */}
      <div className="pt-4 space-y-1">
        <h3 className="font-medium font-display text-base line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {artist}
        </p>
      </div>
    </Link>
  );
};

export default AlbumCard;
