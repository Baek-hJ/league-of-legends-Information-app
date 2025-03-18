// src/app/layout.tsx

import Link from "next/link";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <nav>
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언 목록</Link>
            <Link href={"/rotation"}>챔피언 로테이션</Link>
            <Link href={"/items"}>아이템 목록</Link>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
