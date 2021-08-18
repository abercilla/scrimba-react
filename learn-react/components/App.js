//App is the root of our DOM tree


import React from "react"
import Footer from "./Footer"



function App () {
    return (
        <div>
            <Header />
            <MainContent />
            <nav>
            <h1>My App</h1> 
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            </nav>
            <main>
                <p>This is where my content will go...</p>
            </main>
            <Footer />
        </div>



    )




}



export default App 
