export type TProperty = {
  type: string;
  enum?: string[];
  items?: TProperty;
  unique?: boolean;
  required?: string[];
  properties?: Record<string, TProperty>;
};

export type Definition = TProperty & {
  type: 'object';
  properties: TProperty['properties'];
  'x-by'?: string[];
  'x-hasComments'?: boolean;
  'x-hasLocalization'?: boolean;
  'x-hasPictures'?: boolean;
  'x-hasVideos'?: boolean;
  'x-links'?: {
    property: string;
    $ref: string;
  }[];
  'x-uniques'?: string[];
};

export type Policy = { object: string; action: string };

export type RoleAttributes = {
  policies: Policy[];
  groups: string[];
};

export type SchemaOpenApi = {
  info: {
    title: string;
    'x-id': string;
  };
  definitions: Record<string, Definition>;
  'x-roles': Record<string, RoleAttributes>;
};
