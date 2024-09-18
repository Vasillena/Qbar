import "./globals.css";

import Footer from "../components/Footer";
import { Jura } from "next/font/google";
import Navbar from "../components/Navbar";
import { Provider } from "./provider";
import { ThemeProvider } from "../utils/themeProvider";

const jura = Jura({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Qbar | q-bar.bg";
    description =
      "Ритми, коктейли и незабравими нощи в Q. Потопете се в свят, където яките ритми срещат коктейлното изкуство. Очаквайте нещо повече от вечер - очаквайте изживяване.";
    keywords = [
      "Qbar",
      "бар Qbar",
      "Qbar Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "bar Qbar",
      "Qbar Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  } else if (locale === "en") {
    title = "Qbar | q-bar.bg";
    (description =
      "Rhythms, cocktails and unforgettable nights at Q. Immerse yourself in a world where great beats meet the art of cocktails. Expect more than just a night out – expect an experience."),
      (keywords = [
        "Qbar",
        "бар Qbar",
        "Qbar Пловдив",
        "бар Пловдив",
        "бар Капана",
        "Пловдив",
        "Капана",
        "коктейл бар Пловдив",
        "коктейл бар Капана",
        "парти",
        "коктейли",
        "атмосфера",
        "нощен живот",
        "bar Qbar",
        "Qbar Plovdiv",
        "bar Plovdiv",
        "bar Kapana",
        "Plovdiv",
        "Kapana",
        "cocktail bar Plovdiv",
        "cocktail bar Kapana",
        "parties",
        "cocktails",
        "vibe",
        "nightlife",
      ]);
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://q-bar.bg");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={jura.className}>
        <ThemeProvider>
          <Provider locale={locale}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
