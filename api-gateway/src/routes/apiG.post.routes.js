import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";

export const postProxy = createProxyMiddleware({
  target: SERVICES.POST,
  changeOrigin: true
});