
import React from 'react';
import { Artist } from '@/types/music';
import ArtistList from './ArtistList';
import { TabsContent } from "@/components/ui/tabs";

interface ArtistCategoryProps {
  value: string;
  artists: Artist[];
}

const ArtistCategory = ({ value, artists }: ArtistCategoryProps) => {
  return (
    <TabsContent value={value} className="animate-fade-in">
      <ArtistList artists={artists} />
    </TabsContent>
  );
};

export default ArtistCategory;
