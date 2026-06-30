import React from 'react'
import "./chatSection.css"
import Darkmode from '../darkmode/Darkmode'
import { IoSend } from "react-icons/io5";

const ChatSection = () => {
  return (
    <div className='chatsection'>
      <div className="topsection">
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
      </div>

      <div className="bottomsection">
        <input type="text" />
        <button id='sendbtn'><IoSend/></button>
        <Darkmode/>
      </div>

    </div>
  )
}

export default ChatSection
