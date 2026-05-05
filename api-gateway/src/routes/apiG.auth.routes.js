import { createProxyMiddleware } from 'http-proxy-middleware'
import { SERVICES } from '../../config/services.js'
export const authProxy=createProxyMiddleware({
    target:SERVICES.AUTH,
    changeOrigin: true
})

