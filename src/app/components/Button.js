"use client"

import { useRouter } from "next/navigation"

export default function Button(props){
  const router = useRouter();
  const transparent = props.transparent || false
  const onClick = props.onClick
    return(
        <button
        onClick={onClick}
        className={`text-xl font-medium w-full py-2 px-9 rounded-lg ${transparent? "bg-transparent text-white border" : "bg-white text-darkText"}`} >{props.title}</button>
    )
}
