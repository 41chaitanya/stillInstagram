import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";
export const followProxy = createProxyMiddleware({
  target: SERVICES.FOLLOW,
  changeOrigin: true
});