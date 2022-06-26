import { Product } from "../../../entities/Product";
import { InMemoryProductRepository } from "../../../tests/repositories/InMemoryProductRepository";
import { FindByIdUseCase } from "./FindByIdUseCase";

describe("Find Product by id use case", () => {
  it("Buscando produto por id", async () => {
    const productRepository = new InMemoryProductRepository();
    const findByIdUseCase = new FindByIdUseCase(productRepository);

    productRepository.products.push(
      new Product({ name: "Teste", value: 2 }, "IdFake"),
      new Product({ name: "Produto Fake", value: 2 }, "Id Produto")
    );

    const expected = new Product({ name: "Teste", value: 2 }, "IdFake");
    const received = await findByIdUseCase.execute("IdFake");
    await expect(received).toEqual(expected);
  });

  it("Buscando produto por id que não existe", async () => {
    const productRepository = new InMemoryProductRepository();
    const findByIdUseCase = new FindByIdUseCase(productRepository);

    productRepository.products.push(
      new Product({ name: "Teste", value: 2 }, "IdFake"),
      new Product({ name: "Produto Fake", value: 2 }, "Id Produto")
    );

    const expected = null;
    const received = await findByIdUseCase.execute("id");
    await expect(received).toEqual(expected);
  });
});
