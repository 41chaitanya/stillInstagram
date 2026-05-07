import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  try {
    console.log('Verifying token, JWT_SECRET:', process.env.JWT_SECRET);
    const auhtHeader = req.headers.authorization;
    if (!auhtHeader) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    const token = auhtHeader.split(" ")[1];
    console.log('Token:', token);

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded:', decode);
    req.userId = decode.id;

    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
