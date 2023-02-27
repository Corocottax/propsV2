import React from 'react'
import "./Meme.scss"

const Meme = ({meme, color, invisible, titulo}) => {

    return (
        <div style={{backgroundColor: color}} className={invisible ? "invisible" : null}>
            <h3>{titulo}</h3>
            <img src={meme} alt='titulo del meme' />
        </div>
    )
}

export default Meme