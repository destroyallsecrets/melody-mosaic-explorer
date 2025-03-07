
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import ArtistCard from '@/components/ArtistCard';
import { Mic, ListFilter, MusicNote, Disc3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Artists = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample artist data categorized
  const popularArtists = [
    {
      id: '1',
      name: 'Eliza Stellar',
      genres: ['Pop', 'Electronic'],
      imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2187&auto=format&fit=crop',
      followers: 2500000,
      albums: 4,
      isVerified: true
    },
    {
      id: '2',
      name: 'Midnight Veil',
      genres: ['Alternative', 'Rock'],
      imageUrl: 'https://images.unsplash.com/photo-1516900448138-898720dbe532?q=80&w=2187&auto=format&fit=crop',
      followers: 1800000,
      albums: 3,
      isVerified: true
    },
    {
      id: '3',
      name: 'Neon Pulse',
      genres: ['Electronic', 'Dance'],
      imageUrl: 'https://images.unsplash.com/photo-1569863829777-147f6c38a1fe?q=80&w=2274&auto=format&fit=crop',
      followers: 3200000,
      albums: 5,
      isVerified: true
    },
    {
      id: '4',
      name: 'Echo Valley',
      genres: ['Indie', 'Folk'],
      imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2187&auto=format&fit=crop',
      followers: 950000,
      albums: 2,
      isVerified: true
    },
    {
      id: '5',
      name: 'Quantum Beats',
      genres: ['Hip Hop', 'R&B'],
      imageUrl: 'https://images.unsplash.com/photo-1616724229634-2fba467ee0be?q=80&w=2274&auto=format&fit=crop',
      followers: 2100000,
      albums: 6,
      isVerified: true
    }
  ];

  const newArtists = [
    {
      id: '6',
      name: 'Aurora Lights',
      genres: ['Pop', 'Synth'],
      imageUrl: 'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=2274&auto=format&fit=crop',
      followers: 520000,
      albums: 1,
      isVerified: false
    },
    {
      id: '7',
      name: 'Crystal Harmony',
      genres: ['New Age', 'Ambient'],
      imageUrl: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2289&auto=format&fit=crop',
      followers: 380000,
      albums: 2,
      isVerified: false
    },
    {
      id: '8',
      name: 'Urban Whisper',
      genres: ['Hip Hop', 'Soul'],
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop',
      followers: 710000,
      albums: 1,
      isVerified: true
    },
    {
      id: '9',
      name: 'Sapphire Waves',
      genres: ['Pop', 'R&B'],
      imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2160&auto=format&fit=crop',
      followers: 450000,
      albums: 1,
      isVerified: false
    },
    {
      id: '10',
      name: 'Emerald Echo',
      genres: ['Alternative', 'Indie'],
      imageUrl: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=2274&auto=format&fit=crop',
      followers: 290000,
      albums: 1,
      isVerified: false
    }
  ];

  const rockArtists = [
    {
      id: '11',
      name: 'Thunder Road',
      genres: ['Rock', 'Alternative'],
      imageUrl: 'https://images.unsplash.com/photo-1485561222141-e16a8dfba0d4?q=80&w=2274&auto=format&fit=crop',
      followers: 1200000,
      albums: 5,
      isVerified: true
    },
    {
      id: '12',
      name: 'Crimson Steel',
      genres: ['Metal', 'Hard Rock'],
      imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2270&auto=format&fit=crop',
      followers: 980000,
      albums: 4,
      isVerified: true
    },
    {
      id: '13',
      name: 'Velvet Riff',
      genres: ['Classic Rock', 'Blues Rock'],
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop',
      followers: 1450000,
      albums: 7,
      isVerified: true
    },
    {
      id: '14',
      name: 'Sonic Wave',
      genres: ['Rock', 'Punk'],
      imageUrl: 'https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?q=80&w=2274&auto=format&fit=crop',
      followers: 870000,
      albums: 3,
      isVerified: true
    },
    {
      id: '15',
      name: 'Eclipse Anthem',
      genres: ['Progressive Rock', 'Art Rock'],
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2274&auto=format&fit=crop',
      followers: 750000,
      albums: 2,
      isVerified: false
    }
  ];

  const electronicArtists = [
    {
      id: '16',
      name: 'Digital Horizon',
      genres: ['EDM', 'House'],
      imageUrl: 'https://images.unsplash.com/photo-1642975576449-842ca2dda642?q=80&w=2187&auto=format&fit=crop',
      followers: 2800000,
      albums: 6,
      isVerified: true
    },
    {
      id: '17',
      name: 'Pixel Storm',
      genres: ['Techno', 'Electronica'],
      imageUrl: 'https://images.unsplash.com/photo-1459356067573-0a9285135a10?q=80&w=2187&auto=format&fit=crop',
      followers: 1650000,
      albums: 4,
      isVerified: true
    },
    {
      id: '18',
      name: 'Neon Circuit',
      genres: ['Synth-pop', 'Electro'],
      imageUrl: 'https://images.unsplash.com/photo-1548375495-fcd5cf972a63?q=80&w=2232&auto=format&fit=crop',
      followers: 1420000,
      albums: 3,
      isVerified: true
    },
    {
      id: '19',
      name: 'Quantum Beat',
      genres: ['Dubstep', 'Trap'],
      imageUrl: 'https://images.unsplash.com/photo-1515077678510-ce3bdf418862?q=80&w=2235&auto=format&fit=crop',
      followers: 1950000,
      albums: 5,
      isVerified: true
    },
    {
      id: '20',
      name: 'Cyber Dreams',
      genres: ['Chillwave', 'Ambient'],
      imageUrl: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2153&auto=format&fit=crop',
      followers: 890000,
      albums: 2,
      isVerified: false
    }
  ];

  const togglePlayer = () => {
    setPlayerMinimized(!playerMinimized);
  };
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const filterArtists = (artists: any[]) => {
    if (!searchQuery) return artists;
    return artists.filter(artist => 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genres.some((genre: string) => genre.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container px-6 mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <h1 className="h2">Artists</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row mt-4 md:mt-0 space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Input
                  placeholder="Search artists or genres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <ListFilter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          {/* Artist Categories Tabs */}
          <Tabs defaultValue="all" className="w-full mb-10">
            <TabsList className="grid grid-cols-5 w-full md:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="rock">Rock</TabsTrigger>
              <TabsTrigger value="electronic">Electronic</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                    <MusicNote className="h-5 w-5 mr-2 text-primary" /> 
                    Popular Artists
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filterArtists(popularArtists).map((artist, index) => (
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
                          followers={formatNumber(artist.followers)}
                          albums={artist.albums}
                          isVerified={artist.isVerified}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                    <Disc3 className="h-5 w-5 mr-2 text-primary" /> 
                    New Artists
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filterArtists(newArtists).map((artist, index) => (
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
                          followers={formatNumber(artist.followers)}
                          albums={artist.albums}
                          isVerified={artist.isVerified}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                  <MusicNote className="h-5 w-5 mr-2 text-primary" /> 
                  Popular Artists
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filterArtists(popularArtists).map((artist, index) => (
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
                        followers={formatNumber(artist.followers)}
                        albums={artist.albums}
                        isVerified={artist.isVerified}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                  <Disc3 className="h-5 w-5 mr-2 text-primary" /> 
                  New Artists
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filterArtists(newArtists).map((artist, index) => (
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
                        followers={formatNumber(artist.followers)}
                        albums={artist.albums}
                        isVerified={artist.isVerified}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rock" className="animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                  <MusicNote className="h-5 w-5 mr-2 text-primary" /> 
                  Rock Artists
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filterArtists(rockArtists).map((artist, index) => (
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
                        followers={formatNumber(artist.followers)}
                        albums={artist.albums}
                        isVerified={artist.isVerified}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="electronic" className="animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                  <MusicNote className="h-5 w-5 mr-2 text-primary" /> 
                  Electronic Artists
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filterArtists(electronicArtists).map((artist, index) => (
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
                        followers={formatNumber(artist.followers)}
                        albums={artist.albums}
                        isVerified={artist.isVerified}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
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

export default Artists;
