import Link from "next/link";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/champions"}>Champions</Link>
          <Link href={"/items"}>Items</Link>
          <Link href={"/rotation"}>Rotation</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
