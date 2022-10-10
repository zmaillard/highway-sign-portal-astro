export interface Sign {
  title: string;
  date: string;
  imageid: string;
  flickrid: string;
  location: Location;
  country: Item;
  state: Item;
  county: Item;
  place?: Item;
  tags: String[];
  highway: String[];
  highwaytype: String[];
  overlaps: OverlapOutput[];
  intersections: IntersectionOutput[];
  statePages: String[];
  countyPages: String[];
  placePages: String[];
  toHighways: String[];
  oregonhighway: String[];
  alaskahighway: String[];
  freewayjunction: String[];
}
interface IntersectionOutput {
  overlap1?: OverlapOutput;
  overlap2?: OverlapOutput;
  highway1?: String;
  highway2?: String;
}
interface OverlapOutput {
  name: Number;
  highways: String[];
}

interface Item {
  name: Number;
  slug: Number;
}

interface Location {
  latitude: Number;
  longitude: Number;
}
