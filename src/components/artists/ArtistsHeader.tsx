
import React from 'react';
import { Users, ListFilter, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArtistsHeaderProps {
  currentActiveArtist: string | null;
}

const ArtistsHeader = ({ currentActiveArtist }: ArtistsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
      <div className="flex items-center space-x-3">
        <div className="bg-primary/10 rounded-full p-2">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <h1 className="h2">Artists</h1>
      </div>
      
      <div className="flex mt-4 md:mt-0 space-x-2">
        <Button variant="outline" size="sm" className="flex items-center">
          <ListFilter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        
        <Button variant="outline" size="sm" className="flex items-center">
          {currentActiveArtist ? (
            <>
              <Music className="h-4 w-4 mr-2" />
              Pause All
            </>
          ) : (
            <>
              <Music className="h-4 w-4 mr-2" />
              Play All
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ArtistsHeader;
