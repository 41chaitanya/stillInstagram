import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";

export const postProxy = createProxyMiddleware({
  target: SERVICES.POST,
  changeOrigin: true,
  pathRewrite: {
    "^/api/posts": "",
  },
  onError: (err, req, res) => {
    res.status(503).json({
      success: false,
      message: "Post service unavailable"
    });
  }
});