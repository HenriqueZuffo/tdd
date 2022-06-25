import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductDTO } from "./ICreateProductDTO";

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ICreateProductDTO) {
    const product = new Product(data);

    await this.productRepository.save(product);
  }
}
