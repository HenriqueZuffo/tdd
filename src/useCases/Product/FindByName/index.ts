import { MongoProductRepository } from "../../../repositories/Implementation/MongoProductRepository";
import { FindBynameUseCase } from "./FindByNameUseCase";
import { FindByNameUseCaseController } from "./FindByNameUseCaseController";

const mongoProductRepository = new MongoProductRepository();
const findByNameUseCase = new FindBynameUseCase(mongoProductRepository);
const findByNameUseCaseController = new FindByNameUseCaseController(
  findByNameUseCase
);
export { findByNameUseCase, findByNameUseCaseController };
