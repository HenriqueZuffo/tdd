import { Product } from "../../../entities/Product";
import { InMemoryProductRepository } from "../../../tests/repositories/InMemoryProductRepository";
import { FindBynameUseCase } from "./FindByNameUseCase";

describe("Find Product by Name", () => {
  it("Buscando produtos por nome", async () => {
    const productRepositoryInMemory = new InMemoryProductRepository();
    const findByNameUseCase = new FindBynameUseCase(productRepositoryInMemory);

    const expected: Product[] = [
      new Product({ name: "teste", value: 1.5 }, "asasd"),
      new Product({ name: "teste 1234", value: 1.9 }, "asasd231"),
    ];

    productRepositoryInMemory.products.push(
      new Product({ name: "teste", value: 1.5 }, "asasd"),
      new Product({ name: "teste 1234", value: 1.9 }, "asasd231"),
      new Product({ name: "Produto fake", value: 0.0 }, "asasd231123123")
    );

    const received = await findByNameUseCase.execute("teste");
    await expect(received).toEqual(expected);
  });

  it("Buscando por produto que não existe", async () => {
    const productRepositoryInMemory = new InMemoryProductRepository();
    const findByNameUseCase = new FindBynameUseCase(productRepositoryInMemory);

    const expected = null;

    productRepositoryInMemory.products.push(
      new Product({ name: "teste", value: 1.5 }, "asasd"),
      new Product({ name: "teste 1234", value: 1.9 }, "asasd231")
    );

    const received = await findByNameUseCase.execute("Produto fake");
    await expect(received).toEqual(expected);
  });
});
