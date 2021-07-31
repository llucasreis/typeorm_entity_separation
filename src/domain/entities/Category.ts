export type CategoryData = {
  name: string;
}

export default class Category implements CategoryData {
  id?: number;
  name: string;

  constructor ({ name }: CategoryData, id?: number) {
    this.id = id;
    this.name = name;
  }
}