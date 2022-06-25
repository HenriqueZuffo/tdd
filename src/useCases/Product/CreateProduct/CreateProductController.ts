import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProduct: CreateProductUseCase) {}

  async execute(req: Request, res: Response) {
    const product = Object.assign(req.body);

    try {
      await this.createProduct.execute(product);

      return res.status(201).send();
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
