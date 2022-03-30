module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "https://mhbvufznnx.us-east-1.awsapprunner.com/graphql/",
      headers: "", // local authority
      // TODO: add the headers for some real secure queries
      skipSSLValidation: true,
    },
  },
};
