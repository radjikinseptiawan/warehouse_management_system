import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const { pathname } = req.nextUrl;

    if (pathname === "/" && isAuth) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Izinkan akses ke "/" tanpa token, tapi route lain wajib punya token
        if (req.nextUrl.pathname === "/") return true;
        return !!token;
      },
    },
  }
)

export const config = {
  matcher: [
    "/home/:path*", 
    "/inventory/:path*",
    "/gudang/:path*",
    "/vendor/:path*",
    "/category/:path*",
    "/notification/:path*",
    "/inbound/:path*",
    "/outbound/:path*", 
    "/"
  ],
}