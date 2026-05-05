import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";

export const messageProxy = createProxyMiddleware({
  target: SERVICES.MESSAGE,
  changeOrigin: true
});