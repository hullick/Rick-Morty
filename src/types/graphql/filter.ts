export interface FilterCharacter {
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: CharacterGender;
}

export enum CharacterStatus {
  ALIVE,
  DEAD,
  UNKNOWN,
}

export enum CharacterGender {
  MALE,
  FEMALE,
  GENDERLESS,
  UNKNOWN,
}
