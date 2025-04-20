import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // ✅ Yeh pages bina login ke accessible honge
  publicRoutes: ['/', '/home', '/contact'],

  // ✅ Agar koi page ignore karna ho Clerk se (very rare)
  ignoredRoutes: [],

  // ✅ Optional: Debug info dekhne ke liye
  afterAuth(auth, req) {
    console.log("User Auth Status:", auth.userId ? "Logged in" : "Not logged in");
    console.log("Visiting:", req.nextUrl.pathname);
  },
});

export const config = {
  // ✅ Ye matcher sab dynamic/static assets ko exclude karega
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)"],
};
