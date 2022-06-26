import { Product } from "../../../entities/Product";
import { InMemoryCreateProductRepository } from "../../../tests/repositories/InMemoryProductRepository";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

describe("Get all products use case", () => {
  it("Get all products", async () => {
    const productRepository = new InMemoryCreateProductRepository();
    const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);

    const expected: Product[] = [
      new Product({ name: "teste", value: 1.5 }, "asasd"),
    ];

    productRepository.products.push(
      new Product({ name: "teste", value: 1.5 }, "asasd")
    );

    const received = await getAllProductsUseCase.execute();

    await expect(received).toEqual(expected);
  });
});
