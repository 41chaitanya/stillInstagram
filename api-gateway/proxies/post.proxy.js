import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICE } from "../config/services.js";

export const postProxy = createProxyMiddleware({
  target: SERVICE.POST_SERVICE,
  changeOrigin: true,

  onProxyReq: (proxyReq, req) => {

    // forward userId
    if (req.userId) {
      proxyReq.setHeader("x-user-id", req.userId);
    }

  }
});