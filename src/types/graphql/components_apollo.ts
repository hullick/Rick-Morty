import { FilterCharacter } from "./filter";
import { GET_PAGINATED_FILTERED_CHARACTERS } from "./queries";

export const listCharacters = (
  targetResult: string,
  variables: FilterCharacter = {},
  loadingKey = "Loading..."
) => {
  const apolloObject: any = {
    loadingKey: loadingKey,
    variables: variables,
  };

  apolloObject[targetResult] = GET_PAGINATED_FILTERED_CHARACTERS;

  return apolloObject;
};
