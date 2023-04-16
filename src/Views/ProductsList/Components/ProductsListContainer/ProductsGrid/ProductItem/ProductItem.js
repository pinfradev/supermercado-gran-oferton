import noImage from '../../../../../../assets/no-image.jpg'
import './product-item.css'
function ProductItem({product}) {
    const image = product.imageUrl || noImage 
    return (
        <div className='product-item'>
            <img className='product-item_image' src={image} placeholder={noImage}/>          
            <p className='product-item_name'>{product.productName}</p> 
            <p className='product-item_price'>{product.price}</p>
        </div>
    )
}

export {ProductItem}