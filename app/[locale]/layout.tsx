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
    title = "Qbar | qbar.bg";
    description =
      "Добре дошли в С.И.П.И - мястото за бар ентусиасти! При нас ще се наслаждавате на авторски коктейли, парти обстановка и музикални изживявания. Бар С.И.П.И е повече от място за напитки; това е преживяване, където парти хората се събират, за да споделят обичта си към музиката.";
    keywords = [
      "S.I.P.I",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
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
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
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
    title = "Qbar | qbar.bg";
    description =
      "Welcome to S.I.P.I – a destination for bar enthusiasts! With us you will enjoy signature cocktails, party atmosphere and musical experiences. S.I.P.I Bar is more than a place for drinks; it's an experience where party people come together to share their love of music";
    keywords = [
      "S.I.P.I",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
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
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
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
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://sipi.bg");

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
