import { Container, Col, Row, Image, Alert } from "react-bootstrap"
import cart from '../../assets/cart.png'
import { SupermarketTitle } from '../ProductsList/Components/SupermarketTitle/SupermarketTitle'
import {ProductInfoField} from '../ProductDetail/ProductInfoField/ProductInfoField'
import { PromotionButton } from "../ProductDetail/PromotionButton/PromotionButton"
import { FieldWithArrow } from "./FieldWithArrow/FieldWithArrow"
import './adminproductpage.css'
import React from "react"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { NoArrowField } from "./NoArrowField/NoArrowField"
import { TextAreaInfo } from "./TextAreaInfo/TextAreaInfo"
import { useManageProduct } from "./useManageProduct"
import {Loader} from '../Loader/Loader'
import { useNavigate } from "react-router-dom"
function AdminProductPage() {
    const [stock, setStock] = React.useState(0)
    const [location, setLocation] = React.useState('')
    const [id, setId] = React.useState('')
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [color, setColor] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [showAlert, setShowAlert] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const {
        getProduct
    } = useManageProduct()

    const navigate = useNavigate()
    return (
        <Container className="ml-3 mr-3"> 
            <Row className="mb-5">
                <Col sm={3}>
                   <Image fluid src={cart}/>
                </Col>
                <Col sm={9}>
                    <SupermarketTitle
                        titleComponent1 = "supermercado"
                        titleComponent2 = "Gran oferton"
                    />
                </Col>
            </Row>
           <Row className="mb-5">
                <Col className="d-flex justify-content-end">
                   <NoArrowField
                    title="Id del producto"
                    value={id}
                    onChange = {(event) => setId(event.target.value)}
                   /> 
                </Col>
                <Col sm={{offset:1}}>
                    <Row>
                        <Col className="w-50" sm={5}>
                            <PromotionButton
                                title="Consultar Producto"
                                clickMethod={ () => {
                                    setIsLoading(true)
                                    getProduct(id)
                                    .then((product) => {
                                        setId(product.id)
                                        setName(product.productName)
                                        setPrice(product.price)
                                        setDescription(product.description)
                                    }).catch((error) => {
                                        setName('')
                                        setPrice('')
                                        setDescription('')
                                        setShowAlert(true)
                                    }).finally(() => {
                                        setIsLoading(false)
                                    })
                                }}
                            />
                        </Col>
                        <Col sm={5} className="w-50">
                            <PromotionButton
                                title="En promoción"
                            />
                        </Col>
                    </Row>
                </Col>
           </Row>
            <Row className="field mb-5">
                <Col>
                <NoArrowField
                    title="Nombre del producto"
                    value={name}
                    onChange = {(event) => setName(event.target.value)}
                   /> 
                </Col>
                <Col sm={1}></Col>
                <Col sm={1}></Col>
                <Col className="padding d-flex justify-content-end">
                <NoArrowField
                    title="Precio"
                    value={price}
                    onChange = {(event) => setPrice(event.target.value)}
                   /> 
                </Col>
            </Row>
            <Row className="field mb-5">
                <Col>
                <NoArrowField
                    title="Stock en unidades"
                    value={stock}
                    onChange = {(event) => setStock(event.target.value)}
                   /> 
                </Col>
                <Col sm={1}></Col>
                <Col sm={1}></Col>
                <Col className="d-flex justify-content-end">
                    <FieldWithArrow
                        title="Ubicación"
                        onChange = {(option) => {
                            setLocation(option)
                        }}
                        options={locations}
                        value={location}
                    />  
                 </Col>
            </Row>
            <Row className="mb-5">
            <Col className="d-flex justify-content-end">
                    <FieldWithArrow
                        title="Color"
                        onChange = {(option) => {
                            setColor(option)
                        }}
                        options={colors}
                        value={color}
                    />  
                 </Col>
                 <Col sm={1}></Col>
                <Col sm={1}></Col>
                 <Col className="d-flex justify-content-end">
                    <FieldWithArrow
                        title="Categoría"
                        onChange = {(option) => {
                            setCategory(option)
                        }}
                        options={categories}
                        value={category}
                    />  
                 </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <TextAreaInfo
                    title="Descripcion del producto"
                    text={description}
                    changeText={(event) => setDescription(event.target.value)}
                />
            </Row>
            <Row className="mt-5 d-flex justify-content-center">
                <Row className="w-50">
                    <Row>
                        <Col>
                            <PromotionButton
                                title="Registrar nuevo producto"
                                clickMethod = {() => {
                                    navigate("/administrator")
                                }}
                            />
                        </Col>
                        <Col sm={{offset: 1}}>
                            <PromotionButton
                                title="Modificar producto"
                                clickMethod = {() => {
                                    navigate("/administrator")
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <PromotionButton
                                title="Desactivar producto"
                                clickMethod = {() => {
                                    navigate("/administrator")
                                }}
                            />
                        </Col>
                        <Col sm={{offset: 1}}>
                            <PromotionButton
                                title="Activar producto"
                                clickMethod = {() => {
                                    navigate("/administrator")
                                }}
                            />
                        </Col>
                    </Row>
                </Row> 
            </Row>
            
            {isLoading && <Loader/>}
            
            {showAlert &&
                <Alert variant="primary" dismissible>
                    Ha ocurrido un error
                </Alert>}
        </Container>
    )
}

const locations = [
    "Loca1", 
    "Loca2",
    "Loca3", 
    "Loca4",
    "Loca5", 
    "Loca6",
    "Loca7", 
    "Loca8",
    "Loca9", 
    "Loca10"
]

const colors = [
    "Rojo",
    "Azul",
    "Amarillo"
]

const categories = [
    "Implemento deportivo",
    "zapatos",
    "tecnología"
]


export {AdminProductPage}