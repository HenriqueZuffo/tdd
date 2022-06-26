import { Request, Response } from "express";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsController {
  constructor(private getAllProduct: GetAllProductsUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const allProducts = await this.getAllProduct.execute();
      return res.status(200).json(allProducts);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
