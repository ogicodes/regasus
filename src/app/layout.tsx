import "./globals.css";
import { Providers } from "@/providers/Providers";
import NavBar from "@/components/NavBar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavBar />
          <main className="mt-32 px-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

