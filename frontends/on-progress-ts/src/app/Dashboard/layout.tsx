import {Koulen} from "next/font/google"

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
        {children}
      </body>
    </html>
  );
}
