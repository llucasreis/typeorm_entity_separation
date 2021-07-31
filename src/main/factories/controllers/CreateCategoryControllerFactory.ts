import CreateCategoryUseCase from "@application/useCases/CreateCategoryUseCase";
import CreateCategoryController from "@presentation/controllers/CreateCategoryController";
import CategoryRepositoryFactory from "../repositories/CategoryRepositoryFactory";

export default function CreateCategoryControllerFactory(): CreateCategoryController {
  const categoryRepository = CategoryRepositoryFactory();
  const useCase = new CreateCategoryUseCase(categoryRepository);

  return new CreateCategoryController(useCase);
}