export interface FilterCharacter {
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: CharacterGender;
}

export enum CharacterStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "Unknown",
}

export enum CharacterGender {
  MALE = "Male",
  FEMALE = "Female",
  GENDERLESS = "Genderless",
  UNKNOWN = "Unknown",
}
