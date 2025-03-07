
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import { Play, Pause, Heart, Clock, Share, MoreVertical, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Album = () => {
  const { id } = useParams<{ id: string }>();
  const [playerMinimized, setPlayerMinimized] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Sample album data (in a real app, this would be fetched based on the ID)
  const album = {
    id: id || '1',
    title: 'Midnight Echoes',
    artist: 'Lunar Wave',
    coverUrl: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop',
    releaseYear: 2023,
    genres: ['Ambient', 'Electronic', 'Downtempo'],
    description: 'A journey through cosmic soundscapes and ethereal harmonies, created to inspire deep reflection and tranquility.',
    totalDuration: '48:26',
    songs: [
      { id: 's1', title: 'Lunar Horizon', duration: '4:32', isPopular: true },
      { id: 's2', title: 'Celestial Drift', duration: '5:16', isPopular: false },
      { id: 's3', title: 'Midnight Whispers', duration: '6:04', isPopular: true },
      { id: 's4', title: 'Echo Chamber', duration: '4:45', isPopular: false },
      { id: 's5', title: 'Stellar Motion', duration: '5:23', isPopular: false },
      { id: 's6', title: 'Cosmic Pulse', duration: '5:58', isPopular: true },
      { id: 's7', title: 'Gravity Well', duration: '4:21', isPopular: false },
      { id: 's8', title: 'Tidal Lock', duration: '5:12', isPopular: false },
      { id: 's9', title: 'Event Horizon', duration: '6:55', isPopular: false }
    ]
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const togglePlayer = () => setPlayerMinimized(!playerMinimized);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-20">
        {/* Album Header */}
        <div className="h-[400px] relative overflow-hidden">
          {/* Background Image with Blur and Overlay */}
          <div className="absolute inset-0 bg-cover bg-center blur-xl opacity-30" style={{ backgroundImage: `url(${album.coverUrl})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          
          {/* Back Button */}
          <div className="absolute top-8 left-8 z-10">
            <Link 
              to="/discover" 
              className="flex items-center space-x-2 text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors hover:bg-black/30"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>
          </div>
          
          {/* Album Content */}
          <div className="container px-6 mx-auto h-full flex items-end pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-6 md:space-y-0 md:space-x-8">
              {/* Album Cover */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={album.coverUrl}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Album Info */}
              <div className="text-white">
                <div className="flex items-center space-x-2">
                  <span className="text-xs uppercase tracking-wider bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                    Album
                  </span>
                  <span className="text-xs text-white/70">
                    {album.releaseYear}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold font-display mt-2 mb-1">
                  {album.title}
                </h1>
                
                <div className="flex items-center space-x-1 text-white/70 mb-3">
                  <span className="font-medium">{album.artist}</span>
                  <span>•</span>
                  <span>{album.songs.length} songs</span>
                  <span>•</span>
                  <span>{album.totalDuration}</span>
                </div>
                
                <div className="flex items-center space-x-4 mt-4">
                  <button 
                    onClick={togglePlay}
                    className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 hover:bg-white/90 shadow-lg"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-5 w-5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-5 w-5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                  
                  <button 
                    onClick={toggleFavorite}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      isFavorite 
                        ? "bg-primary text-white" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20">
                    <Share className="h-5 w-5 text-white" />
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20">
                    <MoreVertical className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Album Details and Songs */}
        <div className="container px-6 mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Songs */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="text-xl font-semibold font-display mb-4">Songs</h2>
              
              <div className="bg-accent/50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider w-[60px]">#</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
                      <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider w-[80px]">
                        <Clock className="h-4 w-4 ml-auto" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {album.songs.map((song, index) => (
                      <tr 
                        key={song.id}
                        className="border-b border-border/50 last:border-0 hover:bg-accent/90 transition-colors"
                      >
                        <td className="py-3 px-4 text-left text-sm font-medium text-muted-foreground">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4 text-left">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium">
                                {song.title}
                                {song.isPopular && (
                                  <span className="ml-2 text-xs text-primary">Popular</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-muted-foreground">
                          {song.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Right Column - Album Info */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <h2 className="text-xl font-semibold font-display mb-4">About</h2>
              
              <div className="bg-accent/50 rounded-xl p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {album.description}
                  </p>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                      {album.genres.map((genre) => (
                        <span 
                          key={genre} 
                          className="text-xs font-medium px-3 py-1 bg-accent rounded-full"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Released</h3>
                    <p className="text-sm text-muted-foreground">
                      {album.releaseYear}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Artist</h3>
                    <Link 
                      to={`/artist/${album.artist.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {album.artist}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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

export default Album;
