import { CategoryRepository } from "@domain/contracts/repositories/CategoryRepository";
import TypeOrmCategoryRepository from "@infra/typeorm/repositories/TypeOrmCategoryRepository";


export default function CategoryRepositoryFactory(): CategoryRepository {
  return new TypeOrmCategoryRepository();
}