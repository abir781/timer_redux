import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const TimerRoot= () => {
  const [input, setInput] = useState("");
  const [seconds, setseconds]= useState(0);
  const [minutes, setminutes]= useState(0);
  const [hours, sethours]= useState(0);

  return (
    <div className="flex  items-center justify-center min-h-screen gap-4">

        <div className="flex gap-5">
            <div>
                    <input
        type="text"
        placeholder="MM:SS or seconds"
        value={`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}
        onChange={(e) => setInput(e.target.value)}
        className="rounded focus:outline-none text-[#edfa51] text-[44px] font-bold w-[400px] h-[80px] bg-[#77c64c] text-center"
      />
            </div>

            <div className="   ">
                 <button
        onClick={() => console.log("User input:", input)}
        className="bg-green-500  text-white px-12 h-[80%] mt-[8px]  rounded-xl"
      >
        <FaPlay size={25} className="text-[#edfa51]"/>
      </button>

            </div>
        </div>
      

  

     
    </div>
  );
};

export default TimerRoot;
