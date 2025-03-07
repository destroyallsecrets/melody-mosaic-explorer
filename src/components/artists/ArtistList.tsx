
import React from 'react';
import ArtistCard from '@/components/ArtistCard';
import { Artist } from '@/types/music';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList = ({ artists }: ArtistListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {artists.map((artist, index) => (
        <div 
          key={artist.id} 
          className="animate-fade-in" 
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <ArtistCard
            id={artist.id}
            name={artist.name}
            genres={artist.genres}
            imageUrl={artist.imageUrl}
            followers={artist.followers}
            albums={artist.albums}
            isVerified={artist.isVerified}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
