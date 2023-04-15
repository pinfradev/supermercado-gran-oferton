import { Container, Row, Col } from "react-bootstrap"
import './productlistcontainer.css'
import { SidebarHeader } from "./SidebarHeader/SidebarHeader"
import { SidebarItem } from "./SidebarItem/SidebarItem"

function ProductsListContainer() {
    return (
        <Container fluid className="products-list-container">
            <Row className="h-100">
                <Col sm={4} className="side-menu">
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
                                <input type="range" min={0} max={100000}/>
                            <div className="white-circle"></div>
                        </div>
                    </div>
                </Col>
                <Col>
    
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