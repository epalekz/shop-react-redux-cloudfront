let apiGateway = import.meta.env.VITE_API_GATEWAY_ID;
let apiGateway2 = import.meta.env.VITE_API_GATEWAY_ID2;
apiGateway = "6kjrpwj3v8";
apiGateway2 = "hfs91lpfsc";

const API_PATHS = {
  product: "https://.execute-api.us-east-1.amazonaws.com/dev",
  order: "https://.execute-api.us-east-1.amazonaws.com/dev",
  import: `https://${apiGateway2}.execute-api.us-east-1.amazonaws.com/dev`,
  bff: `https://${apiGateway}.execute-api.us-east-1.amazonaws.com`,
  cart: "https://.execute-api.us-east-1.amazonaws.com/dev",
};

export default API_PATHS;
