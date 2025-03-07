
import React from 'react';
import { Artist } from '@/types/music';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtistCategory from './ArtistCategory';

interface ArtistsTabsProps {
  featuredArtists: Artist[];
  risingStars: Artist[];
  establishedIcons: Artist[];
  electronicPioneers: Artist[];
}

const ArtistsTabs = ({
  featuredArtists,
  risingStars,
  establishedIcons,
  electronicPioneers
}: ArtistsTabsProps) => {
  return (
    <Tabs defaultValue="featured" className="w-full mb-10">
      <TabsList className="grid grid-cols-4 w-full md:w-auto">
        <TabsTrigger value="featured">Featured</TabsTrigger>
        <TabsTrigger value="rising">Rising Stars</TabsTrigger>
        <TabsTrigger value="icons">Established Icons</TabsTrigger>
        <TabsTrigger value="pioneers">Electronic Pioneers</TabsTrigger>
      </TabsList>
      
      <ArtistCategory value="featured" artists={featuredArtists} />
      <ArtistCategory value="rising" artists={risingStars} />
      <ArtistCategory value="icons" artists={establishedIcons} />
      <ArtistCategory value="pioneers" artists={electronicPioneers} />
    </Tabs>
  );
};

export default ArtistsTabs;
