import Image from "next/image";
//import aelithron from "@/public/aelithron.jpg"
import nova from "@/public/nova.jpg"
import { Sixtyfour } from "next/font/google";
import Link from "next/link";

const otherFont = Sixtyfour({
  subsets: ["latin"],
});

export default function ProfileCard() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4"> {/* md:grid-cols-2 */}
      <div className="bg-slate-800 text-white rounded-xl p-2">
        <div className="flex items-center gap-2">
          <Image src={nova} alt="Nova's profile picture" height={60} width={60} className="rounded-full" />
          <h1 className={`${otherFont.className} text-lg`}>Nova</h1>
          <Link className="underline" href={"/pronouns"}>they/them</Link>
        </div>
      </div>
      {/*<div className="bg-slate-800 text-white rounded-xl p-2">
        <div className="flex items-center gap-2">
          <Image src={aelithron} alt="Aelithron's profile picture" height={60} width={60} className="rounded-full" />
          <h1 className={`${otherFont.className} text-lg`}>Aelithron</h1>
        </div>
      </div>*/}
    </div>
  )
}