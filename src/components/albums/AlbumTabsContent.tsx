
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import AlbumCategory from './AlbumCategory';
import { Album } from '@/types/music';

interface AlbumTabsContentProps {
  featuredAlbums: Album[];
  newReleases: Album[];
  classicalAlbums: Album[];
  electronicAlbums: Album[];
}

const AlbumTabsContent = ({
  featuredAlbums,
  newReleases,
  classicalAlbums,
  electronicAlbums
}: AlbumTabsContentProps) => {
  return (
    <>
      <TabsContent value="all" className="animate-fade-in">
        <AlbumCategory
          title="Featured Albums"
          albums={featuredAlbums}
          viewAllLink="/albums?category=featured"
        />
        
        <AlbumCategory
          title="New Releases"
          albums={newReleases}
          viewAllLink="/albums?category=new"
        />
        
        <AlbumCategory
          title="Classical Collection"
          albums={classicalAlbums}
          viewAllLink="/albums?category=classical"
        />
        
        <AlbumCategory
          title="Electronic Beats"
          albums={electronicAlbums}
          viewAllLink="/albums?category=electronic"
        />
      </TabsContent>
      
      <TabsContent value="featured" className="animate-fade-in">
        <AlbumCategory
          title="Featured Albums"
          subtitle="Our editorial picks of exceptional music across all genres."
          albums={featuredAlbums}
        />
      </TabsContent>
      
      <TabsContent value="new" className="animate-fade-in">
        <AlbumCategory
          title="New Releases"
          subtitle="Fresh sounds from your favorite artists and exciting newcomers."
          albums={newReleases}
        />
      </TabsContent>
      
      <TabsContent value="classical" className="animate-fade-in">
        <AlbumCategory
          title="Classical Collection"
          subtitle="Timeless masterpieces from the greatest composers and orchestras."
          albums={classicalAlbums}
        />
      </TabsContent>
      
      <TabsContent value="electronic" className="animate-fade-in">
        <AlbumCategory
          title="Electronic Beats"
          subtitle="Cutting-edge electronic music from producers pushing boundaries."
          albums={electronicAlbums}
        />
      </TabsContent>
    </>
  );
};

export default AlbumTabsContent;
