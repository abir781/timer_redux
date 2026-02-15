import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const TimerRoot = () => {
  const [time, setTime] = useState("000000"); 
  // internal raw number (HHMMSS without :)

  const intervalref = useRef(null);

  const handleChange = (e) => {

    const value = e.target.value.replace(/\D/g, "");
    let newvalue= (time+value).slice(-6);
    console.log(newvalue);
    setTime(newvalue);

    
   
  };

  const runtimer =(totalseconds)=>{

    if (intervalref.current) {
    clearInterval(intervalref.current);
  }

    intervalref.current = setInterval(() => {
  if (totalseconds <= 0) {
    clearInterval(intervalref.current);
    intervalref.current = null;
    return;
  }

  totalseconds--;

  const h = Math.floor(totalseconds / 3600);
  const m = Math.floor((totalseconds % 3600) / 60);
  const s = totalseconds % 60;

  setTime(
    String(h).padStart(2, "0") +
    String(m).padStart(2, "0") +
    String(s).padStart(2, "0")
  );
}, 1000);

  }

  const handleplay = () =>{
    console.log("jjjkk");

    let totalseconds ;

    const hours = parseInt(time.slice(0,2));
    const minutes = parseInt(time.slice(2,4));
    const seconds = parseInt(time.slice(4,6));

    let totalsecondofhour = hours*60*60;
    let totalsecondofminutes = minutes*60;

 totalseconds = totalsecondofhour + totalsecondofminutes + seconds;

 runtimer(totalseconds);

// let newhour = Math.floor(totalseconds / 3600);
// let newminute = Math.floor((totalseconds % 3600) / 60);
// let newsecond = totalseconds % 60;

// setTime(
//   String(newhour).padStart(2, "0") +
//   String(newminute).padStart(2, "0") +
//   String(newsecond).padStart(2, "0")
// );
   
   
  }

     const handleplay2 = (totalmoment) =>{
    

    



 
      runtimer(totalmoment);

    
 

    
  }

  // Format HH:MM:SS
  const formattedTime = `${time.slice(0,2)}:${time.slice(2,4)}:${time.slice(4,6)}`;

  return (
    <div className="flex items-center justify-center min-h-screen gap-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
        <div className="flex gap-8 items-center">
          <input
            type="text"
            value={formattedTime}
            onChange={handleChange}
            className="rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 text-yellow-300 text-7xl font-bold w-[420px] h-[120px] bg-gradient-to-br from-red-600 to-orange-600 text-center shadow-xl border-4 border-yellow-400/50 hover:shadow-2xl transition-all duration-300"
          />

          <button 
            onClick={handleplay} 
            className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 h-[120px] rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400/50"
          >
            <FaPlay size={32} className="text-yellow-300" />
          </button>

          <div className="flex flex-col gap-4">
            <button 
              onClick={()=>handleplay2(3900)} 
              className="px-8 py-4 bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              1 Hour 5 minutes
            </button>
            <button 
              onClick={()=>handleplay2(7800)} 
              className="px-8 py-4 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              2 Hour 10 minutes
            </button>
            <button 
              onClick={()=>handleplay2(11700)} 
              className="px-8 py-4 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              3 Hour 15 minutes
            </button>
            <button 
              onClick={()=>handleplay2(15600)} 
              className="px-8 py-4 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              4 Hour 20 minutes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerRoot;