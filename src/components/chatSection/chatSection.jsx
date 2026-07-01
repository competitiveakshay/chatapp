import React, { useContext } from 'react'
import "./chatSection.css"
import Darkmode from '../darkmode/Darkmode'
import { IoSend } from "react-icons/io5";
import { dataContext } from '../../context/UserContext';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"

const ChatSection = () => {

  let {sent, input, setInput, showResult, resultData, recentPrompt, loading} = useContext(dataContext)

  return (
    <div className='chatsection'>
      <div className="topsection">
        {!showResult?
        <div className='heading'>
          <span>
            Hello Akshay
          </span>
          <span>
            I am your AI Assistant
          </span>
          <span>
            What can I help you...?
          </span>
        </div>
        : <div className="result">
            <div className="userbox">
              <img src={user} alt="" width="60px"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
              <img src={ai} alt="" width="60px"/>
              {loading?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p>{resultData}</p>}
            </div>
        </div> }
      </div>

      <div className="bottomsection">
        <input onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='Enter you prompt' value={input }/>
        {input?<button id='sendbtn' onClick={()=>{sent(input)}}><IoSend/></button>:null}
        <Darkmode/>
      </div>

    </div>
  )
}

export default ChatSection
