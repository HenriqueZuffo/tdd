import { MongoProductRepository } from "../../../repositories/Implementation/MongoProductRepository";
import { FindByIdUseCase } from "./FindByIdUseCase";
import { FindByIdUseCaseController } from "./FindByIdUseCaseController";

const mongoProductRepository = new MongoProductRepository();
const findProductByIdUseCase = new FindByIdUseCase(mongoProductRepository);
const findProductByIdController = new FindByIdUseCaseController(
  findProductByIdUseCase
);

export { findProductByIdUseCase, findProductByIdController };
