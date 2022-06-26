import { MongoProductRepository } from "../../../repositories/Implementation/MongoProductRepository";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

const mongoRepository = new MongoProductRepository();
const getAllProductsUseCase = new GetAllProductsUseCase(mongoRepository);

export { getAllProductsUseCase };
