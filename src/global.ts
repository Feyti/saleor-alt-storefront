// import * as Sentry from "@sentry/browser";
import { configResponsive } from "@umijs/hooks";
import { message } from "antd";
import { getIntl } from "umi";

// import config from "./config";

export { client } from "./apollo";

configResponsive({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
});

const intl = getIntl();
window.addEventListener("load", function() {
  const key = "offline";
  const offlineMsg = () =>
    message.error({
      content: intl.formatMessage({ id: "misc.offline.msg" }),
      duration: 20,
      key,
      onClose: offlineMsg,
    });
  window.addEventListener("offline", offlineMsg);

  window.addEventListener("online", () => {
    message.error({
      content: intl.formatMessage({ id: "misc.offline.msg" }),
      duration: 0.01,
      key,
    });
    message.success({
      content: intl.formatMessage({ id: "misc.online.msg" }),
    });
  });
});

// configure sentry
// if (["staging", "production"].includes(config.env)) {
//   Sentry.init({
//     dsn: "https://13f440bce1084c3397c480ee35ee1931@sentry.io/5178361",
//     environment: config.env,
//   });
// }
