import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const InterFront = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "StudyNook - Book Your Study Space",
  description: "Discover and book premium private study rooms instantly. Focus better, book smarter with StudyNook.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme='light'
      className={`${InterFront.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
