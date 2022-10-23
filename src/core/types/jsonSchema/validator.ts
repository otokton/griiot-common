export interface Validator {
  url: string;
  jsonSchema: any;
  name: string;
  uniques: string[];
  textIndexes?: string[];
}
