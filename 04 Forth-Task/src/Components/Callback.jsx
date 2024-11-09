import React, { useState } from 'react'

const Callback = ({ getColor }) => {

    const [activecolor, setAcitveColor] = useState()

    const handleChange = (e) => {
        const { value } = e.target;
        setAcitveColor(value);
        getColor(value)

    }

    return (
        <div>
            <div style={{ width: '245px', margin: 'auto',padding:'1.5rem' }}>
                <input type="text" style={{ border: '1px solid black', width: '100%',padding:'0.25rem',fontSize:"16px", margin: 'auto', outline: "none" }} onChange={handleChange} value={activecolor} />
            </div>
            </div>
    )
}

export default Callback
