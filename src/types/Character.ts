import Episode from "./Episode";

interface Character {
    foto: string;
    characterId: number,
    identifier: number,
    name: string,
    gender: string,
    species: string,
    lastEpisode: Episode
}

export default Character