import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";

const font = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maro-Social",
  description: "Social Media Application Created by Maro Asam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <NextTopLoader color="primary" />
            <div className="w-full bg-white dark:bg-[#020817] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              <Header />
            </div>

            <div className="bg-slate-100 dark:bg-[#020817] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
