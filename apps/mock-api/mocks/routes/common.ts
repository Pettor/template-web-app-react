// Use this file only as a guide for first steps using middleware variants. You can delete it when you have understood the concepts.
// For a detailed explanation about using middlewares, visit:
// https://mocks-server.org/docs/usage/variants/middlewares

const routes = [
  {
    id: "add-headers", //route id
    url: "*", // url in express format
    method: ["GET", "POST", "PUT", "PATCH"], // HTTP methods
    variants: [
      {
        id: "disabled", // variant id
        disabled: true,
      },
    ],
  },
];

export default routes;
