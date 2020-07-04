import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(1)
    const maxValue = 20;

    const handleIncreaseValue = () => {
        if (value == maxValue) return
        setValue(preValue => preValue + 1)
        setValue(preValue => preValue + 1)
        setValue(preValue => preValue + 1)
    }

    const handledecreaseValue = () => {
        if (value == 0) return
        setValue(prevValue => prevValue - 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>{value}</h3>
            <button onClick={handleIncreaseValue}>+</button>
            <button onClick={handledecreaseValue}>-</button>
        </div>
    )
}

export default Counter