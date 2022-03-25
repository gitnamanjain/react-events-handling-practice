import React, { useState } from 'react'
import './Buttton.css';
function Buttton() {
    const [count, setCount] = useState(0);
    const [second, setSecond] = useState([])
    const handleClick = () => {
        setCount(count + 1);
        setSecond([...second, count + 1])
    };
    const [last, setLast] = useState('')
    const handleLastClick = (event) => {
        setLast(event.target.value)
    }

    return (
        <>
            <div className="firstrow">
                <div className='smallbox'>
                    Counter -  {count}
                </div>
                <div className='smallbox'>
                    Last Button Clicked - {last}
                </div>
            </div>
            <div className="secondrow">
                <div className="smallbox">
                    <button className="nodec" onClick={handleClick}>
                        Add a Button
                    </button>
                </div>
                {
                    second.map((item) => (
                        <div className='smallbox'>
                            <button className="nodec" key={item} value={item} onClick={handleLastClick}>Button {item}</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Buttton