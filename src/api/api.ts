export const ApiRoute = process.env.NEXT_PUBLIC_API_ROUTE
  ? process.env.NEXT_PUBLIC_API_ROUTE
  : (() => {
      throw new Error("Api route is not defined on the environments variable");
    })();
