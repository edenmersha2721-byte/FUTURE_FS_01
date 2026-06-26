import { Router } from "express";
import rateLimit from "express-rate-limit";
import { handleContact } from "../controllers/contactController.js";

const router = Router();

// Throttle the contact endpoint to deter spam / abuse.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 8, // max submissions per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages sent. Please try again in a little while.",
  },
});

router.post("/", contactLimiter, handleContact);

export default router;
