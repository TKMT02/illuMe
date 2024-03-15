"use client"
import type { Metadata } from "next";
import { useEffect, type ReactNode } from "react";
import { Inter } from "next/font/google";
import 'ress';
import "../styles/globals.scss";
import Header from "@/components/header";
import MainHeader from "@/components/mainHeader";
import SubHeader from "@/components/subHeader";
import Footer from "@/components/footer";
import AddGroup from "@/components/addGroup";

import { HeaderProvider } from '@/contexts/HeaderContext'; // 追加
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="ja">
      <body>
        <HeaderProvider>
          <Header />
          {children}
          <AddGroup />
          <Footer />
        </HeaderProvider>
      </body>
    </html>
  );
}
