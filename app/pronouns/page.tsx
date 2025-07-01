import { Sixtyfour } from "next/font/google";
import { HomeButton } from "../(ui)/UniversalButtons.module";

const headerFont = Sixtyfour({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-16 gap-2">
      <HomeButton />
      <h1 className={`${headerFont.className} text-4xl font-semibold`}>pronouns and terms</h1>
      <h2 className="italic mb-2 text-xl">aka &quot;how to refer to nova properly!&quot;</h2>
      <p>Hey! You must be here to learn about my pronouns, or pronouns in general! :3</p>
      <p>I use and prefer they/them pronouns, but I don&apos;t mind if you use she/her pronouns to refer to me.</p>
      <p>This also goes for terms, honorifics, and other stuff!</p>
    </main>
  );
}