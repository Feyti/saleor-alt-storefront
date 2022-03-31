module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "https://mhbvufznnx.us-east-1.awsapprunner.com/graphql/",
      headers: {
        Authorization: "bearer " + process.env.AUTHORIZATION_KEY,
      }, // local authority
      skipSSLValidation: true,
    },
  },
};
