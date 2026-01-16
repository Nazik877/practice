import {useState} from "react";
const TrimString = () => {
    const [text, setText]= useState("    hello       ");


    return (
        <>
        <p>{text}</p>
        <button onClick={() => setText(text.trim())}>Trim</button>
        
        
        </>
    )
}
export default TrimString;