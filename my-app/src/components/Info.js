import React from "react"

export default function Info() {
    return (
        <nav className="container">
            
           
            <img  src="./src/images/Me.jpg" alt="Me"></img> 
            
                <h1 className="name">Virginia Cooper</h1>
                <h2 className="title">Frontend Developer</h2>
                <h4 className="website">virginia.cooper.website</h4>
           
                <div>
                <button className="email">Email</button>
                <button>LinkedIn</button>
                </div>
            
        </nav>

    )
}