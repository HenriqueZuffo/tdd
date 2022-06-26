import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

export class InMemoryProductRepository implements IProductRepository {
  public products: Product[] = [];

  async findById(id: string): Promise<Product | null> {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      return null;
    }

    return product;
  }

  async findByName(name: string): Promise<Product[] | null> {
    const productsFiltered = this.products.filter((product) => {
      if (product.name.includes(name)) {
        return product;
      }
    });

    if (productsFiltered.length === 0) {
      return null;
    }

    return productsFiltered;
  }

  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }
  async save(product: Product): Promise<void> {
    this.products.push(product);
  }
}
