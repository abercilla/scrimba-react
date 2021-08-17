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
function MyInfo {
  (
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

ReactDOM.render(
  MyInfo,
  document.getElementById("root")
)