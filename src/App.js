import './App.css';
import Post from './components/Post/post';
import Header from './components/header/header'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [isLit, setLit] = useState(true);

  const clickHandler = () => {

    setLit(!isLit)
  }
  
 

  return (
   

    <div className={`App ${(isLit) ? "lit" : "dark"}`}>
      
       <button className="darkMode"  onClick={clickHandler}>{(isLit)? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun}/>}
      
      </button> 




    <Header />

     
      <Post />
       </div>
   
  );
}

export default App;

 