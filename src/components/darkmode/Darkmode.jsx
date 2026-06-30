import React, { useEffect, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import "./Darkmode.css"

const Darkmode = () => {
    const[mode, setMode] = useState("darkmode")

    function toggle(){
        if(mode === "darkmode"){
            setMode("lightmode")
        }
        else{
            setMode("darkmode")
        }
    }

    useEffect(()=>{
        document.body.className=mode
    },[mode])

  return (
    <button className="modebtn" onClick={()=>{
        toggle()
        console.log(mode);
        
    }}>
      <IoIosSunny />
    </button>
  )
}

export default Darkmode
