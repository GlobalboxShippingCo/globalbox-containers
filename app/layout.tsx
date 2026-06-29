import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "@/app/context/WishlistContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globalbox Containers",
  description: "Premium Shipping Containers Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <WishlistProvider>
  <CartProvider>
    {children}

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#0f172a",
          color: "#fff",
          borderRadius: "12px",
          fontSize: "15px",
          padding: "14px",
        },
      }}
    />
  </CartProvider>
</WishlistProvider>

<Script id="tawk-to" strategy="afterInteractive">
  {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),
      s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6a42ca8eb271bd1d477e8abd/1jsaeef94';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
</Script>
      </body>
    </html>
  );
}