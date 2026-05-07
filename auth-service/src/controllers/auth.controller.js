import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import { registerService, loginService } from "../service/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const newUser = await registerService(req.body);
  res.status(201).json({ success: true, newUser });
});



export const login = asyncHandler(async (req, res) => {
 
    const data = await loginService(req.body);
    res.json({ success: true, ...data });
  
})
