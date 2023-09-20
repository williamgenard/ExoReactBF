import style from './ProductList.module.css'

function ProductListItem(props) {

    const { name, price, promo } = props

    return (
        <>
            <h3>- {name} : <span className={promo ? style.red : undefined}>{price}</span> euros</h3>
            {promo && (
                <p>Promo !</p>
            )}
        </>
    )
}

export default ProductListItem