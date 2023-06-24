const routes = [
  {
    id: "post-tokens",
    url: "api/tokens",
    method: ["POST"],
    variants: [
      {
        id: "disabled", // variant id
        disabled: true,
      },
    ],
  },
];

export default routes;
