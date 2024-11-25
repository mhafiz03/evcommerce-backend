import {Koulen} from "next/font/google"
import {Palanquin} from "next/font/google"
import "./globals.css";

const koulen = Koulen({
  weight: '400', subsets: ["latin"]
});

const palanquin = Palanquin({
  weight : '400', subsets: ["latin"]
})



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={koulen.className}
      >
        {children}
      </body>
    </html>
  );
}
