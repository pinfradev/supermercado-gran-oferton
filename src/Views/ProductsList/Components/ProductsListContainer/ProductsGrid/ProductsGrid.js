import './product-grid.css'

function ProductsGrid({children}) {
    return (
        <div className='products-grid'>
            {children}
            <p>entrando</p>
        </div>
    )
}

export {ProductsGrid}