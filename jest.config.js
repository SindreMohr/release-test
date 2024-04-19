module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    // The test environment that will be used for testing
    testEnvironment: "node",
  
    // A list of paths to directories that Jest should use to search for files in
    roots: [
      "<rootDir>/tests" // Replace with the path to your test files
    ],
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };