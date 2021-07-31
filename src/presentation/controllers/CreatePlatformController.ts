import CreatePlatformUseCase from "@application/useCases/CreatePlatformUseCase";
import { PlatformData } from "@domain/entities/Platform";
import { Request, Response } from "express";

export default class CreatePlatformController {
  constructor(private useCase: CreatePlatformUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body as PlatformData;

    const newPlatform = await this.useCase.execute({name});

    return response.json(newPlatform);
  }
}