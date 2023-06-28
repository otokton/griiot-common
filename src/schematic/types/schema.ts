import { LinkType } from '../enums/linkType';

export interface GriiotItem {
  type: string;
  enum?: string[];
}

export interface GriiotProperty {
  type?: string;
  name: string;
  unique?: boolean;
  required?: boolean;
  items?: GriiotItem;
  properties?: GriiotProperty[];
}

export interface GriiotObject {
  id: string;
  name: string;
  type: string;
  tag?: string;
  by?: string[];
  roles?: string[];
  links?: string[];
  items?: GriiotItem;
  uniques?: string[];
  required?: string[];
  description?: string;
  hasVideos?: boolean;
  hasPictures?: boolean;
  hasComments?: boolean;
  hasLocalization?: boolean;
  properties: GriiotProperty[];
}

export interface LinkedObject {
  id: string;
  name: string;
}

export interface GriiotLink {
  id: string;
  type: LinkType;
  ownerObject: LinkedObject;
  linkedObject: LinkedObject;
}

export interface GriiotSchemaItem {
  id: string;
  name: string;
  roles: GriiotObject[];
  users: GriiotObject[];
  links: GriiotObject[];
  objects: GriiotObject[];
}

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
