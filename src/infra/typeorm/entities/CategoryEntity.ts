import { CategoryData } from "@domain/entities/Category";
import { EntitySchema } from "typeorm";
import BaseEntity from "./BaseEntity";

const CategoryEntity = new EntitySchema<CategoryData>({
  name: "categories",
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      unique: true
    }
  }
});

export default CategoryEntity;