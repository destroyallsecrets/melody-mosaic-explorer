
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

const Index = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);

  const togglePlayer = () => {
    setPlayerMinimized(!playerMinimized);
  };

  // Sample album data
  const featuredAlbums = [
    {
      id: '1',
      title: 'Midnight Echoes',
      artist: 'Lunar Wave',
      coverUrl: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '2',
      title: 'Crystal Dreams',
      artist: 'Ethereal Mind',
      coverUrl: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=2071&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '3',
      title: 'Quantum Field',
      artist: 'Particle Horizon',
      coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '4',
      title: 'Azure Skies',
      artist: 'Coastal Symphony',
      coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '5',
      title: 'Urban Whispers',
      artist: 'City Lights',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2021
    }
  ];

  const newReleases = [
    {
      id: '6',
      title: 'Eternal Sunrise',
      artist: 'Dawn Chorus',
      coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '7',
      title: 'Neon Dreams',
      artist: 'Digital Pulse',
      coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '8',
      title: 'Astral Journey',
      artist: 'Stellar Winds',
      coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '9',
      title: 'Ocean Depth',
      artist: 'Aquatic Resonance',
      coverUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '10',
      title: 'Mountain Echo',
      artist: 'Alpine Waves',
      coverUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2013&auto=format&fit=crop',
      releaseYear: 2023
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedSection
          title="Featured Albums"
          subtitle="Curated selections of exceptional music to inspire your day."
          albums={featuredAlbums}
          viewAllLink="/albums"
        />
        
        <FeaturedSection
          title="New Releases"
          subtitle="Fresh sounds from your favorite artists and exciting newcomers."
          albums={newReleases}
          viewAllLink="/new-releases"
        />
      </main>
      
      <MusicPlayer
        minimized={playerMinimized}
        onToggleMinimize={togglePlayer}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
