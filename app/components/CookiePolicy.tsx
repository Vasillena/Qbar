import Link from "next/link";
import { getI18n } from "@/locales/server";

export default async function CookiePolicy(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div className="w-[90%] text-base py-4 mx-auto">
      <h1 className="text-center text-[40px] sm:text-[60px]">
        {t("cookie.cookie-policy")}
      </h1>

      <p className="text-center text-base">{t("cookie.text-1")}</p>

      <p className="text-base">
        {t("cookie.text-2")}
        <Link href="https://qbar.bg" target="_blank" className="ml-1">
          https://qbar.bg
        </Link>{" "}
        {t("cookie.text-3")}
      </p>

      <p className="text-base">
        <strong>{t("cookie.text-4")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-5")}</p>

      <p className="text-base">{t("cookie.text-6")}</p>

      <p className="text-base">
        <strong>{t("cookie.text-7")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-8")}</p>

      <p className="text-base">
        <strong>{t("cookie.text-9")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-10")}</p>

      <p className="text-base">{t("cookie.text-11")}</p>

      <p className="text-base">
        <strong>{t("cookie.text-12")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-13")}</p>

      <ul className="flex flex-col items-center gap-1">
        <li className="text-center">
          <Link href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">
            {t("cookie.text-14")}
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
            {t("cookie.text-15")}
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
            {t("cookie.text-16")}
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
            {t("cookie.text-17")}
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
            {t("cookie.text-18")}
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://help.opera.com/en/latest/web-preferences/">
            {t("cookie.text-19")}
          </Link>
        </li>
      </ul>

      <p className="text-base">
        <strong>{t("cookie.text-20")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-21")}</p>

      <div className="my-4">
        <table className="min-w-[650px] w-full">
          <thead>
            <tr>
              <th className="text-base font-bold">{t("cookie.text-22")}</th>
              <th className="text-base font-bold">{t("cookie.text-23")}</th>
              <th className="text-base font-bold">{t("cookie.text-24")}</th>
              <th className="text-base font-bold">{t("cookie.text-25")}</th>
              <th className="text-base font-bold">{t("cookie.text-26")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-base">CookieScriptConsent</td>
              <td className="text-base">First Party</td>
              <td className="text-base">{t("cookie.text-27")}</td>
              <td className="text-base">sipi.bg</td>
              <td className="text-base">{t("cookie.text-28")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-base">{t("cookie.text-29")}</p>

      <div className="my-4">
        <table className="min-w-[650px] w-full">
          <thead>
            <tr>
              <th className="text-base font-bold">{t("cookie.text-22")}</th>
              <th className="text-base font-bold">{t("cookie.text-23")}</th>
              <th className="text-base font-bold">{t("cookie.text-24")}</th>
              <th className="text-base font-bold">{t("cookie.text-25")}</th>
              <th className="text-base font-bold">{t("cookie.text-26")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-base">_ga_CHK3JEVFYE</td>
              <td className="text-base">First Party</td>
              <td className="text-base">{t("cookie.text-30")}</td>
              <td className="text-base">sipi.bg</td>
              <td className="text-base">{t("cookie.text-31")}</td>
            </tr>
            <tr>
              <td className="text-base">_ga</td>
              <td className="text-base">First Party</td>
              <td className="text-base">{t("cookie.text-30")}</td>
              <td className="text-base">sipi.bg</td>
              <td className="text-base">{t("cookie.text-32")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-base">
        <strong>{t("cookie.text-33")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-34")}</p>

      <p className="text-base">
        <strong>{t("cookie.text-35")}</strong>
      </p>

      <p className="text-base">{t("cookie.text-36")}</p>

      <p className="text-base">{t("cookie.text-37")}</p>

      <p className="text-base">{t("cookie.text-38")}</p>

      <p className="text-base">{t("cookie.text-39")}</p>

      <p className="text-base">{t("cookie.text-40")}</p>
    </div>
  );
}
