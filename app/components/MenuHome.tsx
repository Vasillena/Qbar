import Cocktails from "./Cocktails";
import Food from "./Food";

export default function MenuHome() {
  return (
    <div className="max-w-[1440px] mx-auto py-20 px-2 sm:px-16">
      {/* <div className="max-w-screen mx-auto py-20"> */}
      <Cocktails />
      <Food />
    </div>
  );
}
