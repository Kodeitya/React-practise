import React, { useState } from "react";
import "../../App.css";

function App() {
  const [input, setInput] = useState("");
  
//   const handleClick = (value) => {
//     if (value === "=") {
//       try {
//         setInput(eval(input)); // Note: Avoid using eval() in production; use safer alternatives.
//       } catch (err) {
//         setInput("Error");
//       }
//     } else if (value === "C") {
//       setInput("");
//     } else {
//       setInput(input + value);
//     }
//   };

const handleClick = (value)=>{
    if(value==="="){
        try{
            setInput(eval(input));
        }catch(err){
            setInput("error");
        }
    }
    else if(value==="C"){
        setInput("");
    }

    else  {
        setInput(input+value);
    }
}

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "0", ".", "="].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
