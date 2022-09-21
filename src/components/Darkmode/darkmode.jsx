import { useState } from "react"
import './darkmode.css';


function darkmode() {
  
    const [isLit, setLit] = useState(true);
  
    const clickHandler = () => {
        console.log("I am click handler")
        setLit(!isLit)
    }
  
   
  
    return (
      <div> 
   <div className={`room ${(isLit) ? "lit" : "dark"}`}>
  
  Room is {(isLit) ? "lit" : "Dark"}
  <br />
  <button onClick={clickHandler} >Toggle</button>
  </div>
      
         </div>
     
    );
  }
  
  export default darkmode;