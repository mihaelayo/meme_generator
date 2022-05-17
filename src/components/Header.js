import React from "react"
import trollFace from "/Users/mihaelayordanova/Documents/Programing/meme-generator/src/images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} className="header--image" alt="meme troll logo"/>
            <h1 className="header--tittle">Meme Generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}