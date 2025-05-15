"use client"; // For Next.js (if using App Router)

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Utility for merging class names in ShadCN

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="p-4 lg:px-8 text-2xl font-bold">Ezra Earl Villanueva</div>
    </header>
  );
};

export default Header;