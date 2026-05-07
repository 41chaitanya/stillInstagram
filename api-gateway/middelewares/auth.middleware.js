import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  try {
    const auhtHeader = req.headers.authorization;
    if (!auhtHeader) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    const token = auhtHeader.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
