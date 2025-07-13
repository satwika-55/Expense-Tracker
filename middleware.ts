import { authMiddleware } from "@clerk/nextjs";

console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);


export default authMiddleware({
    publicRoutes:['/']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};