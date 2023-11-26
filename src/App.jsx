import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const [switchPage, setSwitchPage] = useState(false)

  return (
    <>
      <div className="container">
        <div className="background"></div>
        <div className={"bienvenue " + (switchPage ? "animate" : "")}>
          <div className="bienvenuContainer">
            <h1>Cours de programmation en C</h1>
            <h2>disponible en pdf egalement</h2>
            <Button variant="outlined" onClick={()=>{setSwitchPage(true)}}>Voir les cours disponibles</Button>
          </div>
        </div>
      </div>
      <div className={"transitionHider " + (switchPage ? "animate" : "")}></div>
    </>
  )
}

export default App
