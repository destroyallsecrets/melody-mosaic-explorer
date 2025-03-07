
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import AlbumCard from '@/components/AlbumCard';
import { Search, Disc3, ChevronDown } from 'lucide-react';

const Discover = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample genres
  const genres = [
    'All Genres', 'Classical', 'Jazz', 'Electronic', 
    'Pop', 'Rock', 'Hip Hop', 'R&B', 'Folk', 
    'Ambient', 'Indie', 'Soul', 'Blues'
  ];
  
  // Sample discover albums
  const discoverAlbums = [
    {
      id: '11',
      title: 'Harmonic Visions',
      artist: 'Sonic Explorer',
      coverUrl: 'https://images.unsplash.com/photo-1462965326201-d02e4f455804?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '12',
      title: 'Mystic Pathways',
      artist: 'Ancient Echo',
      coverUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2031&auto=format&fit=crop',
      releaseYear: 2021
    },
    {
      id: '13',
      title: 'Coastal Rhythms',
      artist: 'Ocean Pulse',
      coverUrl: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&w=2067&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '14',
      title: 'Urban Canvas',
      artist: 'Street Symphony',
      coverUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '15',
      title: 'Parallel Worlds',
      artist: 'Quantum Shift',
      coverUrl: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3f1?q=80&w=2080&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '16',
      title: 'Desert Dreams',
      artist: 'Nomadic Sound',
      coverUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2112&auto=format&fit=crop',
      releaseYear: 2020
    },
    {
      id: '17',
      title: 'Velvet Sunrise',
      artist: 'Morning Haze',
      coverUrl: 'https://images.unsplash.com/photo-1557682233-43e671455dfa?q=80&w=2029&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '18',
      title: 'Digital Forest',
      artist: 'Organic Code',
      coverUrl: 'https://images.unsplash.com/photo-1578873375969-d60aad647bb9?q=80&w=2068&auto=format&fit=crop',
      releaseYear: 2023
    }
  ];

  const togglePlayer = () => {
    setPlayerMinimized(!playerMinimized);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container px-6 mx-auto">
          {/* Page Header */}
          <div className="flex items-center space-x-3 mb-10">
            <div className="bg-primary/10 rounded-full p-2">
              <Disc3 className="h-6 w-6 text-primary" />
            </div>
            <h1 className="h2">Discover Music</h1>
          </div>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for albums, artists, or songs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-lg border border-border bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="relative flex-shrink-0">
                <select className="appearance-none w-full h-12 px-4 pr-8 rounded-lg border border-border bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary/20">
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <div className="relative flex-shrink-0">
                <select className="appearance-none w-full h-12 px-4 pr-8 rounded-lg border border-border bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="a-z">A to Z</option>
                  <option value="z-a">Z to A</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Albums Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {discoverAlbums.map((album, index) => (
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
      </main>
      
      <MusicPlayer
        minimized={playerMinimized}
        onToggleMinimize={togglePlayer}
      />
      
      <Footer />
    </div>
  );
};

export default Discover;
