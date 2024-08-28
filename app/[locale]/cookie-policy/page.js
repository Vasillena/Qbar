import CookiePolicy from "../../components/CookiePolicy";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen my-10">
      <CookiePolicy />
    </div>
  );
}
