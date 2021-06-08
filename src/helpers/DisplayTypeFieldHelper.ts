export default class DisplayTypeFieldHelper {
  private static classFields: Map<string, Map<string, string>> = new Map();

  static getCharacterFieldDisplay(field: string): string | undefined {
    const typeName = "Character";
    if (!DisplayTypeFieldHelper.classFields.has(typeName)) {
      const typeMap = new Map();

      process.env.VUE_APP_CHARACTERS_FIELDS_DISPLAY.split("|").forEach(
        (fieldDisplay: string) => {
          const [field, display] = fieldDisplay.split(":");

          typeMap.set(field, display);
        }
      );

      DisplayTypeFieldHelper.classFields.set(typeName, typeMap);
    }

    return DisplayTypeFieldHelper.classFields.get(typeName)?.get(field);
  }
}
