"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./components/Button";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col justify-center mt-20 gap-5 text-3xl">
        <Image src="/logo.svg" width={250} height={250} alt="Logo image"/>
        <Button title="Vs CPU" onClick={()=>router.push("/CPU")}/>
        <Button title="Vs Player" onClick={()=>router.push("/Player")}/>
        <Button title="Bonus Game" onClick={()=>router.push("Bonus")}/>
      </div>
    </main>
  );
}
