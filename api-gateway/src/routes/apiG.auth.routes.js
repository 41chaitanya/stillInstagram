import { createProxyMiddleware } from 'http-proxy-middleware'
import { SERVICES } from '../../config/services.js'

export const authProxy = createProxyMiddleware({
    target: SERVICES.AUTH,
    changeOrigin: true,
    pathRewrite: {
        "^/api/auth": "",
    },
    onError: (err, req, res) => {
        res.status(503).json({
            success: false,
            message: "Auth service unavailable"
        });
    }
})

