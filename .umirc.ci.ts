import { defineConfig } from "umi";

export default defineConfig({
  define: {
    APP_ENV: "ci",
    ENDPOINT: "https://mhbvufznnx.us-east-1.awsapprunner.com/graphql/",
  },
});
