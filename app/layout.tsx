import "@/app/ui/global.css";
import { poppins } from "@/app/ui/fonts";
import NavBar from "@/app/ui/nav";
import Footer from "@/app/ui/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gray-900`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
