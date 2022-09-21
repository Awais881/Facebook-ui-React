import './App.css';
import Post from './components/Post/post';
import Header from './components/header/header'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [isLit, setLit] = useState(true);

  const clickHandler = () => {

    setLit(!isLit)
  }
  
 

  return (
   

    <div className={`App ${(isLit) ? "lit" : "dark"}`}>
      { <div className="icon"><FontAwesomeIcon icon={faMoon} onClick={clickHandler} /></div> }




    <Header />

     
      <Post />
       </div>
   
  );
}

export default App;

 