import Category, { CategoryData } from "@domain/entities/Category";

export interface CategoryRepository {
  create(data: CategoryData): Promise<Category>;
}