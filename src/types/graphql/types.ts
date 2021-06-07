export interface CharacterType {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "Unknown";
  species: string;
  type: string;
  gender: string;
  origin: any;
  location: any;
  image: string;
  episode: Array<any>;
  url: string;
  created: string;
}
export interface EpisodeType {
  id: number;
  name: string;
  air_date: string;
  characters: Array<any>;
  url: string;
  created: string;
}