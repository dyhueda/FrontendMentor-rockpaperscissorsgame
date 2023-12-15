import Image from "next/image";

export default function OptionButton(props){
  const setOptions = props.setOptions
  const setWasSelected = props.setWasSelected
    return(
      <button onClick={()=>{setOptions([...props.options, props.title]);setWasSelected(true)}} className={`w-28 h-28 ${props.color} rounded-full justify-center items-center flex ${props.winner}`}>
      <div className="bg-white p-5 rounded-full w-20 h-20">
        <Image src={props.src} width={120} height={120} alt={props.title} />
      </div>
    </button>
    )
}
