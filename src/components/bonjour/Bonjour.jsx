import style from "./Bonjour.module.css"

function Bonjour(props) {

    const { name, age } = props

    return (
        <div className={style.container}>
            <p className={age > 18 && style.bienvenue}>Bienvenue {name} sur l'application React</p>
            <p>Vous {age} avez ans</p>
        </div>
    )
}

Bonjour.defaultProps = {
    age: 18
}

export default Bonjour