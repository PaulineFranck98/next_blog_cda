import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Blog NextJS",
  description: "Exercice blog NextJS CDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className='bg-slate-800 min-h-screen p-6 text-white'>
          {children}
        </main> 
      </body>
    </html>
  );
}
