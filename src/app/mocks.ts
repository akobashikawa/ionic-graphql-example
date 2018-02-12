export const mocks = {
  Query: () => ({
    helloworld: "Hello World! (with Apollo)",
    hello: (root, { name }) => `Hello ${name}!`
  })
};
