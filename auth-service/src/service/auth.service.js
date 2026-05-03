import user_model from "../models/user_model.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { generatejwt } from "../utils/jwtUtil.js";

export const registrService = async ({ username, email, password }) => {
  const existingUser =await user_model.findOne({ email });

  if (existingUser) {
    throw new Error("user alread exists");
  }
  const hashedPassword = await hashPassword(password);

  const newUser = await user_model.create({
    username,
    email,
    password: hashedPassword,
  });
  const token = generatejwt({ id: newUser._id });
  return { newUser, token };
};

export const loginService = async ({ email, password }) => {
  const existingUser = await user_model.findOne({ email });
  if (!existingUser) {
    throw new Error("invalid credential");
  }

  const isMatch = await comparePassword(password, existingUser.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = generatejwt({ id: existingUser._id });

  return {existingUser,token}
};
