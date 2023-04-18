import { Container, Row, Col } from "react-bootstrap"
import './productlistcontainer.css'
import { SidebarHeader } from "./SidebarHeader/SidebarHeader"
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { ProductsGrid } from "./ProductsGrid/ProductsGrid"
import { products } from "../../../../models/products"
import { ProductItem } from "./ProductsGrid/ProductItem/ProductItem"
function ProductsListContainer() {
    return (
        <Container fluid className="products-list-container">
            <Row className="h-100">
                    <Col sm={5} md={4} lg={3} xl={2.1} className="side-menu">
                        <div className="menu-item-set">
                            <SidebarHeader/>
                            {menuOptions.map((option) => {
                                    return (
                                    <SidebarItem key={option.id}
                                        itemName = {option.optionName}
                                        renderSubMenu = {() => (
                                            renderMenuItems(option)
                                        )}
                                    />)
                                })
                            }
                        </div>
                        <div className="menu-item-set">
                            <p className="menu-item-set_title">Rango de precio</p>
                            <div className="slider-range">
                                <div className="white-circle"></div>
                                    <input type="range" min={0} max={20000}/>
                                <div className="white-circle"></div>
                            </div>
                            <Row className="slider-values">
                                <Col>
                                    <p className="slider-values_minimum">0$</p>
                                </Col>
                                <Col>
                                    <p className="slider-values_maximum">20.000$</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <ProductsGrid>
                            {products.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ProductsGrid>
                    </Col>
            </Row>
        </Container>
    )
}

function renderMenuItems(option) {
    return option.subOptions.map((subOption) => {
        return (
            <div key={subOption} className="menu-sub-item">
                <p className="menu-sub-item__name">{subOption}</p>
            </div>
        )
    })
}

const menuOptions = [
    {
        id: 1,
        optionName: 'Categoría',
        subOptions: [
            'electrodomésticos',
            'mascotas',
            'ropa'
        ]
    },
    {
        id: 2,
        optionName: 'Color',
        subOptions: [
            'azul',
            'verde',
            'rojo'
        ]
    },
    {
        id: 3,
        optionName: 'Ubicación',
        subOptions: [
            'Medellín',
            'Bogotá',
            'Cali'
        ]
    }
]
export {ProductsListContainer}