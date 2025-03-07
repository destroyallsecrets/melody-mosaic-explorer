
import React from 'react';
import { ListFilter, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AlbumFiltersProps {
  currentActiveAlbum: string | null;
  onTogglePlayAll: () => void;
}

const AlbumFilters = ({ currentActiveAlbum, onTogglePlayAll }: AlbumFiltersProps) => {
  return (
    <div className="flex mt-4 md:mt-0 space-x-2">
      <Button variant="outline" size="sm" className="flex items-center">
        <ListFilter className="h-4 w-4 mr-2" />
        Filter
      </Button>
      
      <Button variant="outline" size="sm" className="flex items-center" onClick={onTogglePlayAll}>
        {currentActiveAlbum ? (
          <>
            <Pause className="h-4 w-4 mr-2" />
            Pause All
          </>
        ) : (
          <>
            <Play className="h-4 w-4 mr-2" />
            Play All
          </>
        )}
      </Button>
    </div>
  );
};

export default AlbumFilters;
