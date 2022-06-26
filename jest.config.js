/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  coverageDirectory: "src/useCases",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "node",
  preset: 'ts-jest'
};