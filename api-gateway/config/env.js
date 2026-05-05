export const ENV = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key-change-in-production",
  NODE_ENV: process.env.NODE_ENV || "development",
};
