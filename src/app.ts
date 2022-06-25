import express from "express";

const productRouter = require("./useCases/Product/ProductRoutes");

const app = express();

app.use(express.json());
app.use("/products", productRouter);

export { app };
