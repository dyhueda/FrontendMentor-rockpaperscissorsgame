"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./components/Button";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col items-center mt-20 text-3xl sm:flex-row sm:p-40 sm:gap-10">
        <Image src="/logo.svg" width={750} height={750} alt="Logo image" />
        <div className="flex flex-col h-full w-full gap-5 mt-10 sm:w-1/3 sm:gap-10">
          <Button title="Vs CPU" onClick={() => router.push("/CPU")} />
          <Button title="Vs Player Local" onClick={() => router.push("/Local")} />
          <Button title="Vs Player Online (Comming soon...)" onClick={() => router.push("")} />
          <Button title="Bonus Game (Comming soon...)" onClick={() => router.push("")} />
        </div>
      </div>
    </main>
  );
}
