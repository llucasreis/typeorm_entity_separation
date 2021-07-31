import CreateCategoryUseCase from "@application/useCases/CreateCategoryUseCase";
import { CategoryData } from "@domain/entities/Category";
import { Request, Response } from "express";

export default class CreateCategoryController {
  constructor(private useCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body as CategoryData;

    const newCategory = await this.useCase.execute({name});

    return response.json(newCategory);
  }
}