import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount] = useState(0);
  function decreHandler(){
    setCount(count-1);
  }
  function increHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-tr from-amber-700 to-yellow-400 flex-col gap-10">
        
        {/* heading */}
        <div className="text-[#09090b] font-medium text-3xl"> Increment & Decrement </div>
        
        
        {/* Box increment decrement */}
        <div className="bg-[#000000ac] flex justify-center gap-12 px-2 py-3 rounded-md text-[35px] flex-col border-2 border-[#6c2929]">
          <div className="text-center text-[#eae8eed6] justify-center pb-9 pt-2 border-b-2 font-bold text-4xl"> {count} </div>
          <div className="text-[#eae8eed6] justify-center items-center p-1" >
            <button className=" border-r-4 text-center w-20  border-[#fefcfc] text-7xl" onClick={decreHandler}> - </button>
            <button className=" text-center w-20 border-[#f8f4f4ac] text-7xl" onClick={increHandler}> + </button>
          </div>
        </div>

        <button onClick={resetHandler} className="bg-[#fa1f1f61] rounded-md text-xl text-[#ffffff] p-3  font-semibold"> Reset </button>

    </div>
  );
}

export default App;
