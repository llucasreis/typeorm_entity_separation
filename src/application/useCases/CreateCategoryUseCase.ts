import { CategoryRepository } from "@domain/contracts/repositories/CategoryRepository";
import Category, { CategoryData } from "@domain/entities/Category";

export default class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  public async execute(data: CategoryData): Promise<Category> {
    return this.categoryRepository.create(data);
  }
}