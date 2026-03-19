import {  Roboto_Mono } from "next/font/google";
import StoreProvider from "../lib/redux/StoreProvider";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";



const robotoMono = Roboto_Mono({
  variable : "--font-roboto-mono",
  subsets : ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased`}
      >
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
