import express from "express";
import users from "../../schemas/users.js";
import {
  isValidId,
  validateBody,
  authenticate,
} from "../../middlewares/index.js";
import auth from "../../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(users.userSignupSchema), auth.signup);

authRouter.post("/login", validateBody(users.userSigninSchema), auth.signin);

authRouter.get("/current", authenticate, auth.getCurrent);

authRouter.post("/logout", authenticate, auth.signout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(users.updateSubscriptionSchema),
  auth.updateSubscription
);

export default authRouter;
