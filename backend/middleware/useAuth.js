import jwt from "jsonwebtoken";

export const useAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.json({
        success: false,
        message: "Not authorised. Login Again",
      });
    }

    //verify token
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

     // Store the user's ID for the next handler
    req.userId = tokenDecode.id;

    // Allow the request to continue
    next();
    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Please login again",
    });
  }
};
