import { useState } from "react"

function Counter(props) {

    const { incr } = props

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter((currentValue) => currentValue + incr)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={handleClick}>+ {incr}</button>
            {counter !== 0 && (
                <button onClick={handleReset}>Reset</button>
            )}
        </>
    )
}

Counter.defaultProps = {
    incr: 1
}

export default Counter