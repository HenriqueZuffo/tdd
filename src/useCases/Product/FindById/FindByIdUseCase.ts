import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepository";

export class FindByIdUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    const product = await this.productRepository.findById(id);
    return product ? product : null;
  }
}
