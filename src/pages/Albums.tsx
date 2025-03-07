
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import FeaturedSection from '@/components/FeaturedSection';
import { Disc3, ListFilter, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Albums = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [currentActiveAlbum, setCurrentActiveAlbum] = useState<string | null>(null);
  
  // Sample data for different album categories
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

  const classicalAlbums = [
    {
      id: '11',
      title: 'Nocturnal Sonata',
      artist: 'Vienna Philharmonic',
      coverUrl: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '12',
      title: 'Moonlight Symphony',
      artist: 'Royal Concertgebouw',
      coverUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2021
    },
    {
      id: '13',
      title: 'Winter Concerto',
      artist: 'London Philharmonic',
      coverUrl: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '14',
      title: 'Pastoral Rhapsody',
      artist: 'Berlin Chamber',
      coverUrl: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2074&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '15',
      title: 'Baroque Fantasies',
      artist: 'Academy of St. Martin',
      coverUrl: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2087&auto=format&fit=crop',
      releaseYear: 2020
    }
  ];

  const electronicAlbums = [
    {
      id: '16',
      title: 'Digital Waves',
      artist: 'Synthwave Collective',
      coverUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '17',
      title: 'Neon Nights',
      artist: 'Electro Pulse',
      coverUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2023
    },
    {
      id: '18',
      title: 'Circuit Dreams',
      artist: 'Binary Beats',
      coverUrl: 'https://images.unsplash.com/photo-1550684849-39df3781f7b0?q=80&w=2070&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '19',
      title: 'Quantum Pulse',
      artist: 'Digital Horizon',
      coverUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2074&auto=format&fit=crop',
      releaseYear: 2022
    },
    {
      id: '20',
      title: 'Cyber Dreams',
      artist: 'Neural Network',
      coverUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop',
      releaseYear: 2021
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
                <Disc3 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="h2">Albums</h1>
            </div>
            
            <div className="flex mt-4 md:mt-0 space-x-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <ListFilter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <Button variant="outline" size="sm" className="flex items-center">
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
          </div>
          
          {/* Album Categories Tabs */}
          <Tabs defaultValue="all" className="w-full mb-10">
            <TabsList className="grid grid-cols-5 w-full md:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="classical">Classical</TabsTrigger>
              <TabsTrigger value="electronic">Electronic</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <FeaturedSection
                title="Featured Albums"
                albums={featuredAlbums}
                viewAllLink="/albums?category=featured"
              />
              
              <FeaturedSection
                title="New Releases"
                albums={newReleases}
                viewAllLink="/albums?category=new"
              />
              
              <FeaturedSection
                title="Classical Collection"
                albums={classicalAlbums}
                viewAllLink="/albums?category=classical"
              />
              
              <FeaturedSection
                title="Electronic Beats"
                albums={electronicAlbums}
                viewAllLink="/albums?category=electronic"
              />
            </TabsContent>
            
            <TabsContent value="featured" className="animate-fade-in">
              <FeaturedSection
                title="Featured Albums"
                subtitle="Our editorial picks of exceptional music across all genres."
                albums={featuredAlbums}
              />
            </TabsContent>
            
            <TabsContent value="new" className="animate-fade-in">
              <FeaturedSection
                title="New Releases"
                subtitle="Fresh sounds from your favorite artists and exciting newcomers."
                albums={newReleases}
              />
            </TabsContent>
            
            <TabsContent value="classical" className="animate-fade-in">
              <FeaturedSection
                title="Classical Collection"
                subtitle="Timeless masterpieces from the greatest composers and orchestras."
                albums={classicalAlbums}
              />
            </TabsContent>
            
            <TabsContent value="electronic" className="animate-fade-in">
              <FeaturedSection
                title="Electronic Beats"
                subtitle="Cutting-edge electronic music from producers pushing boundaries."
                albums={electronicAlbums}
              />
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

export default Albums;
