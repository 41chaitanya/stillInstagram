import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";

export const followProxy = createProxyMiddleware({
  target: SERVICES.FOLLOW,
  changeOrigin: true,
  pathRewrite: {
    "^/api/follow": "",
  },
  onError: (err, req, res) => {
    res.status(503).json({
      success: false,
      message: "Follow service unavailable"
    });
  }
});