//Scratch Code from various practice challenges 

//need to import React framework like we do Flask
import React from "react"
import ReactDOM from "react-dom"

// ---------- Challenge 1

ReactDOM.render(
    <ul>
        <li>Bagels</li>
        <li>Toast</li>
        <li>Cinnamon Rolls</li>
    </ul>, 
    document.getElementById("root")
)


/// --------- Challenge 2

// 2. Create a functional component called MyInfo that returns the following UI:

function MyInfo () {
  return (
    <div> 
    <h1>Anne Bercilla</h1>
    <p>What's up I'm a full-stack dev!</p>
    <ul>
      <li>Vancouver, BC</li>
      <li>Italy</li>
      <li>Japan</li>
    </ul>
  </div>
  )
}

//render an instance of MyInfo on page
ReactDOM.render(<MyInfo />, document.getElementById("root"))

// Moved MyInfo functional component into components folder

import MyInfo from "./components/MyInfo.js"


import App from "./App"
ReactDOM.render(<App />, document.getElementById("root"))