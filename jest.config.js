const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

module.exports =  {
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
 
}