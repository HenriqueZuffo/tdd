import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepository";

export class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.getAllProducts();
  }
}
