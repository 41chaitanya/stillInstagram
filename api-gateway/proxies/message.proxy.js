import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICE } from "../config/services.js";

export const messageProxy = createProxyMiddleware({
    target: SERVICE.MESSAGE_SERVICE,
    changeOrigin: true,
    pathRewrite: {
        '^/': '/api/message/'
    }
})