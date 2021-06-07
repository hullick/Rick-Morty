import Character from "@/types/Character";
import { CharacterType } from "@/types/graphql/types";
import EpisodeFactory from "./EpisodeFactory";

export default class CharacterFactory {
  public static getCharacterInstanceFrom(data: CharacterType): Character {
    return {
      characterId: data.id,
      foto: data.image,
      identifier: data.id,
      gender: data.gender,
      lastEpisode: EpisodeFactory.getEpisodeInstanceFrom(
        data.episode[data.episode.length - 1]
      ),
      name: data.name,
      species: data.species,
    };
  }
}
