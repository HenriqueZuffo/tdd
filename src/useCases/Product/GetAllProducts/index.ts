import { MongoProductRepository } from "../../../repositories/Implementation/MongoProductRepository";
import { GetAllProductsController } from "./GetAllProductsController";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

const mongoRepository = new MongoProductRepository();
const getAllProductsUseCase = new GetAllProductsUseCase(mongoRepository);
const getAllProductsController = new GetAllProductsController(
  getAllProductsUseCase
);

export { getAllProductsUseCase, getAllProductsController };
