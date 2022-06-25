import { CreateProductUseCase } from "./CreateProductUseCase";
import { MongoProductRepository } from "../../../repositories/Implementation/MongoProductRepository";
import { CreateProductController } from "./CreateProductController";


const mongoProductRepository = new MongoProductRepository()
const createProductUseCase = new CreateProductUseCase(mongoProductRepository)
const createProductController = new CreateProductController(createProductUseCase)

export {createProductUseCase, createProductController }