import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import ArtistCard from '@/components/ArtistCard';
import { Users, ListFilter, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Artists = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [currentActiveArtist, setCurrentActiveArtist] = useState<string | null>(null);

  // Sample data for different artist categories
  const featuredArtists = [
    {
      id: '1',
      name: 'Lunar Wave',
      genres: ['Synthwave', 'Electronic'],
      imageUrl: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop',
      followers: '1.2M',
      albums: 5,
      isVerified: true
    },
    {
      id: '2',
      name: 'Ethereal Mind',
      genres: ['Ambient', 'Downtempo'],
      imageUrl: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?q=80&w=2071&auto=format&fit=crop',
      followers: '850K',
      albums: 3
    },
    {
      id: '3',
      name: 'Particle Horizon',
      genres: ['Progressive', 'House'],
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      followers: '600K',
      albums: 4
    },
    {
      id: '4',
      name: 'Coastal Symphony',
      genres: ['Chillwave', 'Indie'],
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
      followers: '900K',
      albums: 6
    },
    {
      id: '5',
      name: 'City Lights',
      genres: ['Lo-fi', 'Hip-Hop'],
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
      followers: '700K',
      albums: 2
    }
  ];

  const risingStars = [
    {
      id: '6',
      name: 'Dawn Chorus',
      genres: ['Indie Pop', 'Acoustic'],
      imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop',
      followers: '300K',
      albums: 1
    },
    {
      id: '7',
      name: 'Digital Pulse',
      genres: ['Techno', 'Minimal'],
      imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
      followers: '250K',
      albums: 2
    },
    {
      id: '8',
      name: 'Stellar Winds',
      genres: ['Dream Pop', 'Shoegaze'],
      imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop',
      followers: '400K',
      albums: 3
    },
    {
      id: '9',
      name: 'Aquatic Resonance',
      genres: ['Deep House', 'Ambient'],
      imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop',
      followers: '350K',
      albums: 1
    },
    {
      id: '10',
      name: 'Alpine Waves',
      genres: ['Folk', 'Acoustic'],
      imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2013&auto=format&fit=crop',
      followers: '280K',
      albums: 2
    }
  ];

  const establishedIcons = [
    {
      id: '11',
      name: 'Vienna Philharmonic',
      genres: ['Classical', 'Orchestral'],
      imageUrl: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=2070&auto=format&fit=crop',
      followers: '2.5M',
      albums: 25,
      isVerified: true
    },
    {
      id: '12',
      name: 'Royal Concertgebouw',
      genres: ['Classical', 'Symphony'],
      imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop',
      followers: '2.2M',
      albums: 20
    },
    {
      id: '13',
      name: 'London Philharmonic',
      genres: ['Classical', 'Concerto'],
      imageUrl: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2070&auto=format&fit=crop',
      followers: '2.0M',
      albums: 18
    },
    {
      id: '14',
      name: 'Berlin Chamber',
      genres: ['Classical', 'Chamber'],
      imageUrl: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2074&auto=format&fit=crop',
      followers: '1.8M',
      albums: 15
    },
    {
      id: '15',
      name: 'Academy of St. Martin',
      genres: ['Classical', 'Baroque'],
      imageUrl: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2087&auto=format&fit=crop',
      followers: '1.5M',
      albums: 12
    }
  ];

  const electronicPioneers = [
    {
      id: '16',
      name: 'Synthwave Collective',
      genres: ['Synthwave', 'Retrowave'],
      imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop',
      followers: '1.1M',
      albums: 8
    },
    {
      id: '17',
      name: 'Electro Pulse',
      genres: ['Electro', 'Dance'],
      imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      followers: '950K',
      albums: 7
    },
    {
      id: '18',
      name: 'Binary Beats',
      genres: ['Techno', 'IDM'],
      imageUrl: 'https://images.unsplash.com/photo-1550684849-39df3781f7b0?q=80&w=2070&auto=format&fit=crop',
      followers: '800K',
      albums: 6
    },
    {
      id: '19',
      name: 'Digital Horizon',
      genres: ['Trance', 'Progressive'],
      imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2074&auto=format&fit=crop',
      followers: '750K',
      albums: 5
    },
    {
      id: '20',
      name: 'Neural Network',
      genres: ['Ambient', 'Electronic'],
      imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop',
      followers: '700K',
      albums: 4
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
                    {/* Replace MusicNote with Music */}
                    <Music className="h-4 w-4 mr-2" />
                    Pause All
                  </>
                ) : (
                  <>
                    {/* Replace MusicNote with Music */}
                    <Music className="h-4 w-4 mr-2" />
                    Play All
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Artist Categories Tabs */}
          <Tabs defaultValue="featured" className="w-full mb-10">
            <TabsList className="grid grid-cols-5 w-full md:w-auto">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="rising">Rising Stars</TabsTrigger>
              <TabsTrigger value="icons">Established Icons</TabsTrigger>
              <TabsTrigger value="pioneers">Electronic Pioneers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {featuredArtists.map((artist, index) => (
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
                      followers={artist.followers}
                      albums={artist.albums}
                      isVerified={artist.isVerified}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rising" className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {risingStars.map((artist, index) => (
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
                      followers={artist.followers}
                      albums={artist.albums}
                      isVerified={artist.isVerified}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="icons" className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {establishedIcons.map((artist, index) => (
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
                      followers={artist.followers}
                      albums={artist.albums}
                      isVerified={artist.isVerified}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pioneers" className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {electronicPioneers.map((artist, index) => (
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
                      followers={artist.followers}
                      albums={artist.albums}
                      isVerified={artist.isVerified}
                    />
                  </div>
                ))}
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
