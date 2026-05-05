import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../../config/services.js";

export const messageProxy = createProxyMiddleware({
  target: SERVICES.MESSAGE,
  changeOrigin: true,
  pathRewrite: {
    "^/api/message": "",
  },
  ws: true,
  onError: (err, req, res) => {
    res.status(503).json({
      success: false,
      message: "Message service unavailable"
    });
  }
});