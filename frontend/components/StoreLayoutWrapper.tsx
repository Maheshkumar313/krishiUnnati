"use client";

import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function StoreLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isCart = pathname === "/cart";

  if (isAdmin) {
    return <>{children}</>;
  }

  if (isCart) {
    return (
      <>
        <main className="flex-grow">{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
