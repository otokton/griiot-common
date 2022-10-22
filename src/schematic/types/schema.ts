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

export interface GriiotSchema {
  id: string;
  name: string;
  roles: GriiotObject[];
  users: GriiotObject[];
  links: GriiotObject[];
  objects: GriiotObject[];
}
