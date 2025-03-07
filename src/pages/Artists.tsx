import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import ArtistsHeader from '@/components/artists/ArtistsHeader';
import ArtistsTabs from '@/components/artists/ArtistsTabs';
import { Artist } from '@/types/music';

const Artists = () => {
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [currentActiveArtist, setCurrentActiveArtist] = useState<string | null>(null);

  // Sample data for different artist categories
  const featuredArtists: Artist[] = [
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
      albums: 3,
      isVerified: false
    },
    {
      id: '3',
      name: 'Particle Horizon',
      genres: ['Progressive', 'House'],
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      followers: '600K',
      albums: 4,
      isVerified: false
    },
    {
      id: '4',
      name: 'Coastal Symphony',
      genres: ['Chillwave', 'Indie'],
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
      followers: '900K',
      albums: 6,
      isVerified: false
    },
    {
      id: '5',
      name: 'City Lights',
      genres: ['Lo-fi', 'Hip-Hop'],
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
      followers: '700K',
      albums: 2,
      isVerified: false
    }
  ];

  const risingStars: Artist[] = [
    {
      id: '6',
      name: 'Dawn Chorus',
      genres: ['Indie Pop', 'Acoustic'],
      imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop',
      followers: '300K',
      albums: 1,
      isVerified: false
    },
    {
      id: '7',
      name: 'Digital Pulse',
      genres: ['Techno', 'Minimal'],
      imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
      followers: '250K',
      albums: 2,
      isVerified: false
    },
    {
      id: '8',
      name: 'Stellar Winds',
      genres: ['Dream Pop', 'Shoegaze'],
      imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop',
      followers: '400K',
      albums: 3,
      isVerified: false
    },
    {
      id: '9',
      name: 'Aquatic Resonance',
      genres: ['Deep House', 'Ambient'],
      imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop',
      followers: '350K',
      albums: 1,
      isVerified: false
    },
    {
      id: '10',
      name: 'Alpine Waves',
      genres: ['Folk', 'Acoustic'],
      imageUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2013&auto=format&fit=crop',
      followers: '280K',
      albums: 2,
      isVerified: false
    }
  ];

  const establishedIcons: Artist[] = [
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
      albums: 20,
      isVerified: false
    },
    {
      id: '13',
      name: 'London Philharmonic',
      genres: ['Classical', 'Concerto'],
      imageUrl: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2070&auto=format&fit=crop',
      followers: '2.0M',
      albums: 18,
      isVerified: false
    },
    {
      id: '14',
      name: 'Berlin Chamber',
      genres: ['Classical', 'Chamber'],
      imageUrl: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2074&auto=format&fit=crop',
      followers: '1.8M',
      albums: 15,
      isVerified: false
    },
    {
      id: '15',
      name: 'Academy of St. Martin',
      genres: ['Classical', 'Baroque'],
      imageUrl: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=2087&auto=format&fit=crop',
      followers: '1.5M',
      albums: 12,
      isVerified: false
    }
  ];

  const electronicPioneers: Artist[] = [
    {
      id: '16',
      name: 'Synthwave Collective',
      genres: ['Synthwave', 'Retrowave'],
      imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop',
      followers: '1.1M',
      albums: 8,
      isVerified: false
    },
    {
      id: '17',
      name: 'Electro Pulse',
      genres: ['Electro', 'Dance'],
      imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      followers: '950K',
      albums: 7,
      isVerified: false
    },
    {
      id: '18',
      name: 'Binary Beats',
      genres: ['Techno', 'IDM'],
      imageUrl: 'https://images.unsplash.com/photo-1550684849-39df3781f7b0?q=80&w=2070&auto=format&fit=crop',
      followers: '800K',
      albums: 6,
      isVerified: false
    },
    {
      id: '19',
      name: 'Digital Horizon',
      genres: ['Trance', 'Progressive'],
      imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2074&auto=format&fit=crop',
      followers: '750K',
      albums: 5,
      isVerified: false
    },
    {
      id: '20',
      name: 'Neural Network',
      genres: ['Ambient', 'Electronic'],
      imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop',
      followers: '700K',
      albums: 4,
      isVerified: false
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
          <ArtistsHeader currentActiveArtist={currentActiveArtist} />
          
          {/* Artist Categories Tabs */}
          <ArtistsTabs 
            featuredArtists={featuredArtists}
            risingStars={risingStars}
            establishedIcons={establishedIcons}
            electronicPioneers={electronicPioneers}
          />
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
