import Character from "@/types/Character";
import Episode from "@/types/Episode";
import { EpisodeType } from "@/types/graphql/types";

export default class EpisodeFactory {
  public static getEpisodeInstanceFrom(data: EpisodeType): Episode {
    return {
      name: data.name,
    };
  }
}
