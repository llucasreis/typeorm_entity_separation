export type PlatformData = {
  name: string;
}

export default class Platform implements PlatformData {
  id?: number;
  name: string;

  constructor ({ name }: PlatformData, id?: number) {
    this.id = id;
    this.name = name;
  }
}