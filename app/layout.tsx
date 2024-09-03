'use client'
import "@/styles/globals.css";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "./themecontext";
import { Analytics } from "@vercel/analytics/react"
const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme}>
    <head>
      <title>Naresh Vasikarla's Profile</title>
      <link rel="icon" href="/NV.jpg" sizes="any"/>
    </head>
    <body className={`dark:bg-black-100 ${theme}`}>
        <div className="relative flex justify-center items-center flex-col overflow-auto mx-auto">
          <Header/>
          <main className={`flex flex-col sm:flex-row justify-between items-center p-4 w-full pt-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} px-10 sm:px-10`}>
            {children}
            <Analytics/>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
