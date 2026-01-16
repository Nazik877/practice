import{ useState} from  "react";

const ToggleOnOff = () =>{
    const [text, setText]=useState("ON");

 
        return(
           <>
          <h3> {text}</h3> 
          <button onClick={() => setText(text=== "ON" ? "OFF" : "ON")}>
            Change
          </button>
           
           </>
          

        );
   };
export default ToggleOnOff;