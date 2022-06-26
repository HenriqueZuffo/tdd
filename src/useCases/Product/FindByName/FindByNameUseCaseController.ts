import { Request, Response } from "express";
import { FindBynameUseCase } from "./FindByNameUseCase";

export class FindByNameUseCaseController {
  constructor(private findByNameUseCase: FindBynameUseCase) {}

  async execute(req: Request, res: Response) {
    const name = req.params["name"];
    const products = await this.findByNameUseCase.execute(name);

    if (!products) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.status(200).json(products);
  }
}
