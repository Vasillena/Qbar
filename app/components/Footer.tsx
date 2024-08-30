import Image from "next/image";
import { getI18n } from "@/locales/server";
import logo from "@/public/logo-light.svg";

export default async function Footer(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    // <div className="max-w-7xl mx-auto flex items-end mb-12 px-16">
    <div className="max-w-screen mx-auto flex items-end mb-12 px-16">
      <div>
        <Image
          src={logo}
          alt="Logo"
          priority
          style={{
            width: "126px",
            height: "auto",
          }}
        />
      </div>
      <div className="w-full border-t border-[#FFC956] py-6 ml-20 flex  justify-end font-light">
        <div className="text-center">
          <p>Copyright © 2024 - All rights reserved</p>
          <p>Design by SA & Build by VY</p>
        </div>
      </div>
    </div>
  );
}
