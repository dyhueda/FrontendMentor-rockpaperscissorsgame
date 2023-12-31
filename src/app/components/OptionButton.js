import Image from "next/image";

export default function OptionButton(props){
  const setOptions = props.setOptions
    return(
      <button onClick={()=>{setOptions([...props.options, props.title])}} className={`w-28 h-28 sm:w-48 sm:h-48 ${props.color} rounded-full justify-center items-center flex ${props.winner}`}>
      <div className="bg-white p-5 rounded-full w-20 h-20 sm:w-36 sm:h-36 sm:p-7 ">
        <Image src={props.src} width={120} height={120} alt={props.title} />
      </div>
    </button>
    )
}
