import { Request, Response, Router } from "express";
import { createProductController } from "./CreateProduct";
import { getAllProductsController } from "./GetAllProducts";
import { findByNameUseCaseController } from "./FindByName";
import { findProductByIdController } from "./FindById";

const router: Router = Router();

router.post("/", (req: Request, res: Response) => {
  return createProductController.execute(req, res);
});

router.get("/", (req: Request, res: Response) => {
  return getAllProductsController.execute(req, res);
});

router.get("/:name", (req: Request, res: Response) => {
  return findByNameUseCaseController.execute(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  return findProductByIdController.execute(req, res);
});
module.exports = router;
