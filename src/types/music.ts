
export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseYear?: number;
}

export interface Artist {
  id: string;
  name: string;
  genres: string[];
  imageUrl: string;
  followers: string;
  albums: number;
  isVerified?: boolean;
}
