
import React from 'react';
import AlbumCard from './AlbumCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  albums: Array<{
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    releaseYear?: number;
  }>;
  viewAllLink?: string;
  className?: string;
}

const FeaturedSection = ({
  title,
  subtitle,
  albums,
  viewAllLink,
  className
}: FeaturedSectionProps) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="space-y-2">
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
              Collection
            </span>
            <h2 className="h2">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
            )}
          </div>
          
          {viewAllLink && (
            <Link 
              to={viewAllLink}
              className="inline-flex items-center text-sm font-medium mt-4 md:mt-0 text-primary hover:text-primary/80 transition-colors group"
            >
              View all
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
        
        {/* Albums Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {albums.map((album, index) => (
            <div 
              key={album.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AlbumCard
                id={album.id}
                title={album.title}
                artist={album.artist}
                coverUrl={album.coverUrl}
                releaseYear={album.releaseYear}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
