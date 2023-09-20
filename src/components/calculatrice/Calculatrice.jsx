import { useState } from "react"

function Calculatrice() {

    const [nb1, setNb1] = useState("")
    const [operator, setOperator] = useState("+")
    const [nb2, setNb2] = useState("")
    const [result, setResult] = useState("")
 
    const handleSubmit = (e) => {
        e.preventDefault()

        switch (operator) {
            case "+":
                setResult(parseInt(nb1) + parseInt(nb2))
                break;
            case "-":
                setResult(nb1 - nb2)
                break;
            case "*":
                setResult(nb1 * nb2)
                break;
            case "/":
                setResult(nb1 / nb2)
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nb1 : </label>
            <input type="number" value={nb1} onChange={e => setNb1(e.target.value)}/>

            <select value={operator} onChange={e => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>

            <label>Nb2 : </label>
            <input type="number" value={nb2} onChange={e => setNb2(e.target.value)}/>

            <input type="submit"/>

            <input type="text" value={result} readOnly/>
        </form>
    )
}

export default Calculatrice