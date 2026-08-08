// Text - #e3e0ee
// Background - #0f0c18
// Primary - #b2a6d4
// Secondary - #443474
// Accent - #7258ba


import { useState } from "react";



function Counter(){
    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count+1);
    }

    function decrementCount(){
        setCount(count-1);
    }

    function resetCount(){
        setCount(0);
    }

    // console.log("Counter component rendered.");

    let Counter_props = "text-[#ffffff] text-lg mb-4"; // Default color
    if (count > 0) {
        Counter_props = "text-[#00ff00] text-lg mb-4"; // green color for positive count
        console.log("Counter is positive. color green");
    } else if (count < 0) {
        Counter_props = "text-[#ff0000] text-lg mb-4"; // red color for negative count
    } else{
        Counter_props = "text-[#ffffff] text-lg mb-4"; // white color for zero count
    }

    // if count = 0 then hide reset button
    let resetButtonClass = "bg-[#7258ba] hover:bg-[#443474] text-[#e3e0ee] p-1.5 rounded-lg font-medium transition-colors";
    if(count===0){
        resetButtonClass = "hidden";
    }

    // if count = -10 then hide - button
    let decrementButtonClass = "w-12 bg-[#7258ba] hover:bg-[#443474] text-[#e3e0ee] p-1.5 rounded-lg font-medium transition-colors";
    if(count<=-10){
        decrementButtonClass = "hidden";
    }

    // if count = +10 then hide + button
    let incrementButtonClass = "w-12 bg-[#7258ba] hover:bg-[#443474] text-[#e3e0ee] p-1.5 rounded-lg font-medium transition-colors";
    if(count>=10){
        incrementButtonClass = "hidden"
    }

    return (
        <div className="bg-[#b2a6d4] text-[#e3e0ee] w-[210px] flex flex-col items-center justify-center p-4 rounded-lg">
            <h1 className="text-[#e3e0ee] text-2xl font-bold mb-4">Counter</h1>
            <p className={Counter_props}>Count: {count}</p>
            <div className="flex gap-2 mb-4 mt-2">
                <button onClick={decrementCount} className={decrementButtonClass}>
                    -
                </button>
                <button onClick={resetCount} className={resetButtonClass}>
                    Reset
                </button>
                <button onClick={incrementCount} className={incrementButtonClass}>
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;