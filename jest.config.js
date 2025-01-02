module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@babel|lodash-es|react-spring)/)",
  ],
};
