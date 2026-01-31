import type { Metadata } from "next";
import { Geist, Geist_Mono , Vazirmatn , Noto_Naskh_Arabic, Smooch} from "next/font/google";
import "./globals.css";
 
const vazirFont = Vazirmatn({
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "عضویت فروشندگان تاناکورا",
  description: " قرار داد و ثبت نام فروشندگان تاناکورا ",
  icons:{
    icon:"/tanakorafivoIconef.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={vazirFont.className}
      >
        {children}
      </body>
    </html>
  );
}
