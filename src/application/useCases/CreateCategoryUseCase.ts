import { CategoryRepository } from "@domain/contracts/repositories/CategoryRepository";
import Category, { CategoryData } from "@domain/entities/Category";

export default class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  public async execute(data: CategoryData): Promise<Category> {
    const categoryAlreadyExist = this.categoryRepository.findByName(data.name);

    if (categoryAlreadyExist !== null) {
      throw new Error("Category already exist");
    }
    return this.categoryRepository.create(data);
  }
}