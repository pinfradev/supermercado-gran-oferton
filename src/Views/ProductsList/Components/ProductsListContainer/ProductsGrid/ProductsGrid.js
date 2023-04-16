import './product-grid.css'

function ProductsGrid({children}) {
    return (
        <div className='products-grid'>
            {children}
        </div>
    )
}

export {ProductsGrid}