import React from 'react'
import './component-styles/tile.css'
const Tile = ({image,info}) => {
    return (
        <div className="tile">
            <img src={image} alt=""/>
            <h4>{info}</h4>
        </div>
    )
}

export default Tile
