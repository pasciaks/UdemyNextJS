import { NextResponse } from "next/server";

export function middleware(req, res) {
  console.log("middleware..." + req.url);
  return NextResponse.next();
}

// https://nextjs.org/docs/app/building-your-application/routing/middleware

// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
//   }

export const config = {
  matcher: "/news",
};
