import { Product } from "../../entities/Product";
import { IProductRepository } from "../IProductRepository";

export class MongoProductRepository implements IProductRepository{
    private Products: Product[] = [];

    async findById(id: string): Promise<Product>{
        return this.Products[0]
    }

    async findByName(name: string): Promise<Product[]>{
        return this.Products

    }
    async getAllProducts(): Promise<Product[]>{
        return this.Products
    }
    async save(product: Product): Promise<void>{
        return
    }
}