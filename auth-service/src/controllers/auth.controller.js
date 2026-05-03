import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import { registrService } from "../service/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  const newUser = await registrService(req.body);
  res.status(201).json({ success: true, newUser });
});



export const login = asyncHandler(async (req, res) => {
 
    const data = await loginUser(req.body);
    res.json({ success: true, ...data });
  
})
