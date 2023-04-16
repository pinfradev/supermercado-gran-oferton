import noImage from '../../../../../../assets/no-image.jpg'
import './product-item.css'
import { useNavigate } from 'react-router-dom'
function ProductItem({product}) {
    const image = product.imageUrl || noImage 
    const navigate = useNavigate()

    const navigateToDetail = (product) => {
        navigate('/product-detail', {
            state: {
                ...product
            }
        })
    }
    return (
        <div className='product-item' onClick={() => { navigateToDetail(product)}}>
            <img className='product-item_image' src={image} placeholder={noImage}/>          
            <p className='product-item_name'>{product.productName}</p> 
            <p className='product-item_price'>{product.price}</p>
        </div>
    )
}

export {ProductItem}