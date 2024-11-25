import {Koulen} from "next/font/google"
import "./globals.css";
import Image from 'next/image'

const koulen = Koulen({
  weight: '400', subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={koulen.className}
      >
        <div className="absolute top-0 left-0">
          <Image src="/assets/Polygon 1.png" alt="Illustration" width={100} height={100} className="absolute" />
          <Image src="/assets/Polygon 2.png" alt="Illustration" width={100} height={100} className="absolute" />
          <Image src="/assets/Polygon 3.png" alt="Illustration" width={100} height={100} className="absolute" />
        </div>
        {children}
      </body>
    </html>
  );
}
