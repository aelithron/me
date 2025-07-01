import { Sixtyfour } from "next/font/google";
import Image from "next/image";
import aelithron from "@/public/aelithron.jpg"
import nova from "@/public/nova.jpg"
import ProfileCard from "./(ui)/ProfileCard.module";

const headerFont = Sixtyfour({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 min-h-screen p-8 md:p-16 gap-6">
      <div className="col-span-2 bg-violet-700 border-slate-600 border-2 rounded-2xl p-4">
        <div className="flex gap-2 items-center">
          <Image src={nova} alt="Nova's profile picture" height={60} width={60} className="rounded-full" />
          <Image src={aelithron} alt="Aelithron's profile picture" height={60} width={60} className="rounded-full" />
          <h1 className={`${headerFont.className} text-5xl font-semibold`}>welcome!</h1>
        </div>
        <p className="mt-2">My name is Nova, though you may know me as Aelithron.</p>
        <p>I&apos;m a teen software dev from the USA!</p>
        <ProfileCard />
      </div>
      <div className="col-span-2 bg-emerald-500 border-slate-600 border-2 rounded-2xl p-4">

      </div>
    </main>
  );
}
