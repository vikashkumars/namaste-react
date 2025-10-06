// jest.setup.js
const originalWarn = console.warn;

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((msg, ...args) => {
    if (typeof msg === "string" && msg.includes("React Router Future Flag Warning")) {
      return; // Ignore React Router future flag warnings
    }
    originalWarn(msg, ...args);
  });
});
