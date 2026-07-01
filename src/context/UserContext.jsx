import React, { createContext, useState } from 'react'
import main from '../gemini'

export const dataContext = createContext()

const UserContext = (props) => {

    const [input, setInput] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompt, setPreviousPrompt] = useState([])

    function newChat(){
        setShowResult(false)
        setLoading(false)
    }

    async function sent(prompt) {
        setResultData("")
        setShowResult(true)
        setRecentPrompt(prompt)
        setInput("")
        setLoading(true)
        setPreviousPrompt(prev=>[...prev, prompt])
        let response = await main(prompt)
        setResultData(response.split("**")&&response.split("*"))
        setLoading(false)
    }

    const data = {
        input,
        setInput,
        sent,
        loading,
        setLoading,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        recentPrompt,
        setRecentPrompt,
        previousPrompt,
        setPreviousPrompt,
        newChat 
    }

  return (
    <>
        <dataContext.Provider value={data}>
            {props.children}
        </dataContext.Provider>
      
    </>
  )
}

export default UserContext
