import { InMemoryCreateProductRepository } from "../../../tests/repositories/InMemoryProductRepository";
import { CreateProductUseCase } from "./CreateProductUseCase";

describe("Create Product", () => {
  it("Save product", () => {
    const createProductRepository = new InMemoryCreateProductRepository();
    const createProductUseCase = new CreateProductUseCase(
      createProductRepository
    );

    const res = createProductUseCase.execute({
      name: "Teste",
      value: 2.6,
    });

    expect(res).toBeTruthy();
  });
});
