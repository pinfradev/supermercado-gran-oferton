import { Row, Container, Col } from 'react-bootstrap'
import { SupermarketTitle } from '../ProductsList/Components/SupermarketTitle/SupermarketTitle'
import { useLocation } from 'react-router-dom'
import { ProductInfoField } from './ProductInfoField/ProductInfoField'
import cart from '../../assets/cart.png'
import './product-detail.css'
import { PromotionButton } from './PromotionButton/PromotionButton'
function ProductDetail() {
    const location = useLocation()
    const product = location.state
    const titleComponent1 = 'Supermercado'
    const titleComponent2 = "Gran ofertón"

    return (
        <Container className='product-detail'>
            <Row className='product-detail_row'>
                <header className='product-detail_header'>
                    <img className='product-detail_header-image img-fluid' src={cart} />
                    <SupermarketTitle
                        titleComponent1={titleComponent1}
                        titleComponent2={titleComponent2}
                    />
                </header>
                <p className='product-detail_title'>Detalle del producto</p>
            </Row>
            <Row className='product-detail_information'>
                <Col>
                    <Row className='product-detail_field'>
                        <ProductInfoField
                            title='Id del producto'
                            value={product.id}
                        />
                    </Row>
                    <Row className='product-detail_field'>
                        <ProductInfoField
                            title='Disponibles en stock'
                            value={product.stock}
                        />
                    </Row>
                    <Row className='product-detail_field'>
                        <ProductInfoField
                            title='Disponibles en stock'
                            value={product.price}
                        />
                    </Row>
                    <Row>
                        {product.isPromotion && <PromotionButton/>}
                    </Row>
                </Col>
                <Col>
                    <Row className='justify-content-center'>
                        <img className='product-detail_image' src={product.imageUrl}/>
                    </Row>
                    <Row>
                        <p className='product-detail_name'>{product.productName}</p>
                    </Row>
                    <Row className='justify-content-center'>
                        {product.isPromotion && <p className='product-detail_promotion-text'>Este producto está en promoción</p>}
                    </Row>
                </Col>
            </Row>
            <Row>
                <p className='product-detail_description-title'>Decripción</p>
            </Row>
            <Row>
                <p className='product-detail_promotion-text'>{product.description}</p>
            </Row>
        </Container>
    )
}

export { ProductDetail }