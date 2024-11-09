import React, { useState } from 'react'
import Callback from './Callback';
const Color = () => {

    const [color, setColor] = useState(null);

    // our callback function
    const getColor = (color) => {
        setColor(color)
    }



    return (
        <div>
            <div className="container" style={{ border: "1px solid black", height: "280px", width: "250px", margin: 'auto', backgroundColor: `${color}` }}>
            </div>
           
            <Callback getColor={getColor}/>
        </div>
    )
}

export default Color
