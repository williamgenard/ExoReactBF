import ProductListItem from "./ProductListItem"

function ProductList(props) {

    const { products } = props

    const productsJSX = products.map(
        p => <ProductListItem key={p.id} 
            name={p.name} 
            price={p.price}
            promo={p.promo}
            ></ProductListItem>
    )

    return (
        <ul>
            {productsJSX}
        </ul>
    )
}

export default ProductList