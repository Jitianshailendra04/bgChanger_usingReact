import { useState } from "react"

function App() {
 const [color,setcolor] = useState("olive")
  return (
  <>
          <div className="w-screen h-screen duration-200" style={{backgroundColor: color}} >


    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
      <button onClick={() => {setcolor("red")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg bu"
      style={{backgroundColor : color}}>  Red </button>
      <button onClick={() => {setcolor("green")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : color}}>  Green </button>
      <button onClick={() => {setcolor("yellow")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Yellow </button>
      <button onClick={() => {setcolor("grey")}}  className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Grey </button>
      <button onClick={() => {setcolor("blue")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Blue  </button>
       <button onClick={() => {setcolor("black")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Black  </button>
       <button onClick={() => {setcolor("orange")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Orange  </button>
       <button onClick={() => {setcolor("pink")}} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor : color}}>  Pink  </button>
      </div>
      
      </div></div>

    
    </>
  )
}

export default App
