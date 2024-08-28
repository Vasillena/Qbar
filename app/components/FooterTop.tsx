import Image from "next/image";
import { getI18n } from "@/locales/server";
import logo from "@/public/logo-light.svg";

export default async function FooterTop(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3">
      <div className="col-span-1">
        <div>
          <h2>Contacts</h2>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
