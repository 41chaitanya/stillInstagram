import {createProxyMiddleware} from 'http-proxy-middleware'
import { SERVICE } from '../config/services.js'

export const authProxy = createProxyMiddleware({
    target: SERVICE.AUTH_SERVICE,
    changeOrigin: true,
    pathRewrite: {
        '^/': '/api/auth/'
    }
})