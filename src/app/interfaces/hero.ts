export interface Pays {
  id: number;
  code: string;
  name: string;
}
export interface Hero {
  id: number;
  name: string;
  pays:Pays;
  selected:boolean;
}
