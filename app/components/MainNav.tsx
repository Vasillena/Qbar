"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { useI18n } from "@/locales/client";

export default function MainNav({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const t = useI18n();

  const scrollTargetRef = useRef<string | null>(null);

  const linksLeft = [
    { href: "/", label: t("nav.home"), id: "home" },
    { href: "/#about", label: t("nav.about"), id: "about" },
    { href: "/#gallery", label: t("nav.gallery"), id: "gallery" },
  ];

  const linksRight = [
    { href: "/#events", label: t("nav.events"), id: "events" },
    { href: "/menu", label: t("nav.menu") },
    { href: "/#contact", label: t("nav.contact"), id: "contact" },
  ];

  const handleScroll = (id: string, href: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.push(href, { scroll: false });
    } else {
      scrollTargetRef.current = id;
      router.push(href);
    }
  };

  useEffect(() => {
    if (scrollTargetRef.current) {
      const targetId = scrollTargetRef.current;
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrollTargetRef.current = null;
        } else {
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    }
  }, [pathname]);

  return (
    <nav className="mx-6 flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6 space-y-4 sm:space-y-0 ml-12 mt-6 sm:ml-6 sm:mt-0">
      {linksLeft.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center font-bold hover:text-[##FFC956]"
          >
            {link.label}
          </Link>
        );
      })}
      {children}
      {linksRight.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center font-bold hover:text-[#FFC956]"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
