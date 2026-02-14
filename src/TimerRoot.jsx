import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const TimerRoot = () => {
  const [time, setTime] = useState("000000"); 
  // internal raw number (HHMMSS without :)

  const handleChange = (e) => {

    const value = e.target.value.replace(/\D/g, "");
    let newvalue= (time+value).slice(-6);
    console.log(newvalue);
    setTime(newvalue);

    
   
  };

  // Format HH:MM:SS
//   const formattedTime = `${time.slice(0,2)}:${time.slice(2,4)}:${time.slice(4,6)}`;

  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <div className="flex gap-5">
        <input
          type="text"
          value={time}
          onChange={handleChange}
          className="rounded focus:outline-none text-[#edfa51] text-[44px] font-bold w-[400px] h-[80px] bg-[#77c64c] text-center"
        />

        <button className="bg-green-500 text-white px-12 h-[80%] mt-[8px] rounded-xl">
          <FaPlay size={25} className="text-[#edfa51]" />
        </button>
      </div>
    </div>
  );
};

export default TimerRoot;
