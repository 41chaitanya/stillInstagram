import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICE } from "../config/services.js";

export const followProxy = createProxyMiddleware({
  target: SERVICE.FOLLOW_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    '^/': '/api/follow/'
  }
});