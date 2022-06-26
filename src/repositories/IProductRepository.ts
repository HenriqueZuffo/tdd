import { Product } from "../entities/Product";

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product[] | null>;
  getAllProducts(): Promise<Product[]>;
  save(product: Product): Promise<void>;
}
