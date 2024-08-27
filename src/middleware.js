// app/middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { profile } from "./services/user.service";

export function middleware(req, event) {
  const token = cookies().get("PERFECTSOUND")?.value;
  const authPages = ["/signin", "/signup"];
  if (token && authPages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  } else {
    event.waitUntil(
      profile()
        .then((data) => {})
        .catch((e) => {})
    );
  }
  return NextResponse.next();
}

// Specify the paths for which the middleware will run
export const config = {
  // matcher: ["/signin", "/signup"],
};
