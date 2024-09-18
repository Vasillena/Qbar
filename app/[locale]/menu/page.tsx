import FollowPointer from "@/app/components/Animations/FollowPointer";
import Menu from "../../components/Menu";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Меню | q-bar.bg";
    description = "Разгледайте нашето меню.";
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
      "меню",
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
    title = "Menu | q-bar.bg";
    description = "Browse our menu.";
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
      "меню",
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
  }

  const alternates = {
    canonical: locale === "en" ? "/en/menu" : "/bg/menu",
    languages: {
      bg: "/bg/menu",
      en: "/en/menu",
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

export default async function MenuPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen">
      <div
        className={`hidden sm:block fixed left-0 w-12 lg:w-16 xl:w-20 h-4/6 -z-10 bg-contain bg-repeat-y bg-center
     dark:bg-[url('/decor-3-dark.png')]
    bg-[url('/decor-3-light.png')]
  `}
      />
      <div
        className={`hidden sm:block fixed right-0 w-12 lg:w-16 xl:w-20 h-4/6 -z-10 bg-contain bg-repeat-y bg-center
     dark:bg-[url('/decor-3-dark.png')]
    bg-[url('/decor-3-light.png')] 
  `}
        style={{
          transform: "scaleX(-1)",
        }}
      />
      <Menu />
      <FollowPointer />
    </div>
  );
}
