import Cocktails from "./Cocktails";
import Food from "./Food";

export default function MenuHome() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-16">
      <Cocktails />
      <Food />
    </div>
  );
}
