"use client";

import { usePathname } from "next/navigation";

export const NavigationWrapper = ({ children }) => {
  const pathname = usePathname();
  const isMarquee = pathname === "/gallery-marquee";

  if (isMarquee) {
    return null;
  }

  return <>{children}</>;
};
