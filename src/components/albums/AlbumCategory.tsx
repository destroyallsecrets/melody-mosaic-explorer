
import React from 'react';
import FeaturedSection from '@/components/FeaturedSection';
import { Album } from '@/types/music';

interface AlbumCategoryProps {
  title: string;
  subtitle?: string;
  albums: Album[];
  viewAllLink?: string;
}

const AlbumCategory = ({
  title,
  subtitle,
  albums,
  viewAllLink
}: AlbumCategoryProps) => {
  return (
    <FeaturedSection
      title={title}
      subtitle={subtitle}
      albums={albums}
      viewAllLink={viewAllLink}
    />
  );
};

export default AlbumCategory;
