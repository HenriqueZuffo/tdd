import { Request, Response, Router } from "express";
import { createProductController } from "./CreateProduct";
import { getAllProductsController } from "./GetAllProducts";
import { findByNameUseCaseController } from "./FindByName";

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

module.exports = router;
