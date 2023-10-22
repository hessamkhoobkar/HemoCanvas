import Image from "next/image";

import AddItemIcon from "@/assets/AddItem";

export default function Header() {
  return (
    <div className="w-full flex justify-start items-start gap-4">
      <div className="bg-white rounded-full flex justify-start items-start gap-4 h-20 w-64 p-2">
        <Image
          className="rounded-full"
          src="/photo_2023-10-22_21-56-59.jpg"
          width={64}
          height={64}
          alt="Picture of my father"
        />

        <div className="flex flex-col justify-center items-start h-full gap-1">
          <span className="font-semibold">Saeed khoobkar</span>
          <span className="font-semibold text-xs text-neutral-400">
            63 years old
          </span>
        </div>
      </div>
      <button
        title="Add new blood result"
        type="button"
        className="bg-white text-black rounded-full flex justify-center items-center gap-4 w-20 h-20 hover:bg-orange-100 hover:text-orange-500 transition-all duration-200 ease-in-out"
      >
        <AddItemIcon />
      </button>
    </div>
  );
}
