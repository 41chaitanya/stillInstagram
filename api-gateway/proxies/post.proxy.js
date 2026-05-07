import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICE } from "../config/services.js";

export const postProxy = createProxyMiddleware({
  target: SERVICE.POST_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    '^/': '/api/post/'
  }
});