"use client";
import ThemeProvider from "@/lib/providers/themeProvider";
import Footer from "./components/footer";
import NavMenu, { NavMenuProps } from "./components/menu/NavMenu";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const path = pathname === "/" ? "home" : pathname.replace(/\//ig, '');

  return (
    <ThemeProvider>
      <NavMenu currentPath={path as any} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
