module.exports = {
  client: {
    service: {
      name: "saleor",
      url: "https://mhbvufznnx.us-east-1.awsapprunner.com/graphql/",
      headers: {
        Authorization: "bearer Ql4I7RSxi6SnBJqliQ5DIWciE2W6N0",
      }, // local authority
      // TODO: add the headers for some real secure queries
      skipSSLValidation: true,
    },
  },
};
