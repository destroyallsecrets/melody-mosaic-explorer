
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Music, Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface ArtistCardProps {
  id: string;
  name: string;
  genres: string[];
  imageUrl: string;
  followers: string;
  albums: number;
  isVerified?: boolean;
  onPlay?: () => void;
}

const ArtistCard = ({
  id,
  name,
  genres,
  imageUrl,
  followers,
  albums,
  isVerified = false,
  onPlay
}: ArtistCardProps) => {
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
      to={`/artist/${id}`}
      className="group relative flex flex-col items-center transition-all duration-400 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Artist Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-full mb-4">
        {/* Placeholder skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse-slow" />
        )}
        
        {/* Artist Image */}
        <img
          src={imageUrl}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 rounded-full",
            imageLoaded ? "opacity-100" : "opacity-0",
            isHovered && "scale-105"
          )}
        />
        
        {/* Overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 transition-opacity duration-300 backdrop-blur-xs rounded-full",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Play/Pause Button */}
        <button
          onClick={handlePlay}
          className={cn(
            "absolute bottom-2 right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-primary text-primary-foreground shadow-lg",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        
        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full transition-all duration-300",
            isFavorite ? "text-red-500" : "text-white",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Heart 
            className={cn("h-4 w-4", isFavorite && "fill-current")}
          />
        </button>
      </div>
      
      {/* Artist Info */}
      <div className="text-center space-y-1 w-full">
        <div className="flex items-center justify-center gap-1">
          <h3 className="font-medium font-display text-base line-clamp-1">
            {name}
          </h3>
          {isVerified && (
            <BadgeCheck className="h-4 w-4 text-blue-500 flex-shrink-0" />
          )}
        </div>
        
        {/* Genres */}
        <p className="text-xs text-muted-foreground">
          {genres.slice(0, 2).join(' • ')}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-center space-x-3 text-xs text-muted-foreground pt-1">
          <span className="flex items-center">
            <Music className="h-3 w-3 mr-1" />
            {albums} Album{albums !== 1 ? 's' : ''}
          </span>
          <span>{followers} Followers</span>
        </div>
        
        {/* Action Button */}
        <div className={cn(
          "pt-3 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex justify-center items-center space-x-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs h-8 px-3"
            >
              Follow
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Artist</DropdownMenuItem>
                <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
