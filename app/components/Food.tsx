import Fester from "next/font/local";
import Image from "next/image";
import dessert from "@/public/cocktail-4.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function Food() {
  return (
    <div className="flex items-end mt-20 relative">
      <div className="absolute w-[440px] h-[420px] rounded-3xl shadow-2xl dark:bg-[#394940] bg-[#B96001] -z-10" />
      {/* <div className="absolute w-[700px] h-[420px] rounded-r-[100px] shadow-2xl bg-[#394940] -z-10" /> */}
      <div className="relative z-10">
        <Image
          src={dessert}
          alt="Dessert"
          style={{
            width: "540px",
            height: "auto",
            marginLeft: "40px",
            // marginLeft: "280px",
          }}
        />
      </div>

      <div className="w-[510px] ml-auto">
        {/* <div className="w-[510px] ml-auto mr-64"> */}
        <h2 className={`${FesterFont.className} text-6xl`}>Вкусни Изкушения</h2>
        <p className="text-xl pt-8">
          В Q не само музиката е на високо ниво, но и кухнята предлага изкушения
          за всеки вкус.
        </p>
        <p className="text-xl pt-4">
          Нашите майстор-готвачи поднасят уникални ястия, вдъхновени от
          най-добрите световни кулинарни традиции.
        </p>
        <p className="text-xl pt-4">
          Всеки ден ви очаква специалитет на деня, приготвен с най-свежите
          продукти и поднесен с внимание към детайла.
        </p>
        <p className="text-xl pt-4">
          Насладете се на вкусово приключение, което ще допълни вашето Q
          изживяване в сърцето на Капана.
        </p>
      </div>
    </div>
  );
}
