import Cocktails from "./Cocktails";
import Food from "./Food";

export default function MenuHome() {
  return (
    <div className="max-w-[1440px] mx-auto py-20 px-2 sm:px-16">
      <Cocktails />
      <Food />
    </div>
  );
}
