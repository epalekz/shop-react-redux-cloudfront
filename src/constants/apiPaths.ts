let apiGateway = import.meta.env.VITE_API_GATEWAY_ID;
apiGateway = "6kjrpwj3v8";

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: `https://${apiGateway}.execute-api.us-east-1.amazonaws.com`,
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
