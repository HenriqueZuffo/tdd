import { Request, Response, Router } from "express";
import { createProductController } from "./CreateProduct";

const router: Router = Router();

router.post("/", (req: Request, res: Response) => {
  return createProductController.execute(req, res);
});

module.exports = router;
