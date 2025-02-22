import Navbar from "@/app/page/Navbar"
import Footer from "@/app/page/Footor"
import "./globals.css";

export const metadata = {
  title: "lrsupplements",
};

/**
 * The root layout component.
 *
 * This component renders the `Navbar`, main content (provided by the page component), and the `Footer`.
 *
 * @param children The main content to render.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* The site navigation bar */}
        <Navbar />
        {/* The main content of the page */}
        <main className="flex-grow">{children}</main>
        {/* The site footer */}
        <Footer />
      </body>
    </html>
  );
}
