import { Request, Response } from "express";
import { FindByIdUseCase } from "./FindByIdUseCase";

export class FindByIdUseCaseController {
  constructor(private findByIdUseCase: FindByIdUseCase) {}

  async execute(req: Request, res: Response) {
    const id = req.params["id"];
    const product = await this.findByIdUseCase.execute(id);

    if (!product) {
      return res.status(404).json({
        message: "Produto não encontrado",
      });
    }

    return res.status(200).json(product);
  }
}
