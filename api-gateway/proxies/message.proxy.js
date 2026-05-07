import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICE } from "../config/services.js";
 export const messageProxy=createProxyMiddleware({
    target :SERVICE.MESSAGE_SERVICE,
    changeOrigin: true,

    onProxyReq:(proxyReq,req)=>{
     if(req.userId){
        proxyReq.setHeader("x-user-id",req.userId)
     }
    }
 })