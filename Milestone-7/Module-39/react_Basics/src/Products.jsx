import Product from "./Product"
export default function Products(){
    const style = {
        width: '300px',
        height: '90vh',
        border: '2px solid tomato',
        borderRadius: '30px',
        overflow : 'auto'

    }
    return(
        <div className="" style={style}>
            <Product>
                <Product/>
            </Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}