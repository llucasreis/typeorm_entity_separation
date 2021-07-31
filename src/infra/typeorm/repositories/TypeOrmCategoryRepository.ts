import { CategoryRepository } from "@domain/contracts/repositories/CategoryRepository";
import Category, { CategoryData } from "@domain/entities/Category";
import { getRepository, Repository } from "typeorm";
import CategoryEntity from "../entities/CategoryEntity";

export default class TypeOrmCategoryRepository implements CategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository<Category>(CategoryEntity);
  }

  public async create(data: CategoryData): Promise<Category> {
    console.log(data);
    const newCategory = await this.ormRepository.save(data);

    console.log(newCategory);

    return newCategory;
  }
}