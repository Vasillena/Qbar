import Fester from "next/font/local";
import Image from "next/image";
import dessert from "@/public/cocktail-4.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function Food() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-6 items-end mt-20 relative">
      <div className=" absolute w-[490px] h-[420px] rounded-3xl shadow-2xl dark:bg-[#394940] bg-[#B96001] -z-10" />
      {/* <div className="absolute w-[700px] h-[420px] rounded-r-[100px] shadow-2xl bg-[#394940] -z-10" /> */}
      <div className="col-span-3 relative z-10">
        <Image
          src={dessert}
          alt="Dessert"
          style={{
            width: "620px",
            height: "auto",
            marginLeft: "70px",
          }}
        />
      </div>

      <div className="col-span-2">
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
