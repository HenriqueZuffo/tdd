import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepository";

export class FindBynameUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(name: string): Promise<Product[] | null> {
    const products = await this.productRepository.findByName(name);

    return products ? products : null;
  }
}
