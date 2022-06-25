import { Product } from "../entities/Product";

export interface IProductRepository{
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product[]>;
    getAllProducts(): Promise<Product[]>;
    save(product: Product): Promise<void>;
}