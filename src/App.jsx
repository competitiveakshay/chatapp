import { useContext } from "react"
import Sidebar from "./components/SIdebar/Sidebar"
import ChatSection from "./components/chatSection/chatSection"
import Separation from "./components/separation/Separation"
import { dataContext } from "./context/UserContext"


function App() {

  let data = useContext(dataContext)
  
  return (
    <>
      <Sidebar/>  
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App
