import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-primaryBg")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
