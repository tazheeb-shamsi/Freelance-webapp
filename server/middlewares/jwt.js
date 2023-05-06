import JWT from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("You must be logged in");

  JWT.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Invalid Token!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
