// app/middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req, event) {
  const token = cookies().get("PERFECTSOUND")?.value;
  console.log("TOKEN============", token);
  const authPages = ["/signin", "/signup"];
  if (token && authPages.includes(req.nextUrl.pathname)) {
    console.log("Token is available!");
    return NextResponse.redirect(new URL("/", req.url));
  } else {
    console.log("Token is not available!");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup"],
};
