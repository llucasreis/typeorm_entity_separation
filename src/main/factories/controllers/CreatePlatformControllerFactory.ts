import CreatePlatformUseCase from "@application/useCases/CreatePlatformUseCase";
import CreatePlatformController from "@presentation/controllers/CreatePlatformController";
import PlatformRepositoryFactory from "../repositories/PlatformRepositoryFactory";

export default function CreatePlatformControllerFactory(): CreatePlatformController {
  const platformRepository = PlatformRepositoryFactory();
  const useCase = new CreatePlatformUseCase(platformRepository);

  return new CreatePlatformController(useCase);
}