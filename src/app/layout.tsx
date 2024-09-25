import "./globals.css";
import { Providers } from "@/providers/Providers";
import NavBar from "@/components/NavBar/NavBar";
import { inter, cloister } from "@/utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${cloister.variable}`}>
        <Providers>
          <NavBar />
          <main className="mt-32 px-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
