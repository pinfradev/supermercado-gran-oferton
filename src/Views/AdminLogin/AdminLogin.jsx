import { Row, Container, Col, Toast, ToastBody } from 'react-bootstrap'
import promoImage from '../../assets/login-promo-image.jpg'
import './admin-login.css'
import { SupermarketTitle } from '../ProductsList/Components/SupermarketTitle/SupermarketTitle'
import { FormInput } from './FormInput/FormInput'
import usernameIcon from '../../assets/username-icon.png'
import keyIcon from '../../assets/key-icon.png'
import { PromotionButton } from '../ProductDetail/PromotionButton/PromotionButton'
import React from 'react'
import {Loader} from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
    const [shouldLogIn, setShouldLogIn] = React.useState(false)
    const [passwordValue, setPasswordValue] = React.useState('')
    const [userNameValue, setUserNameValue] = React.useState('')
    const [shouldShowLoader, setShowLoader] = React.useState(false)
    const [shouldShowToast, setShowToast] = React.useState(false)
    const url = 'http://localhost:8089/oferton/api/users/login'
    const navigate = useNavigate()
    React.useEffect(()=> {
        if(!shouldLogIn) {
            return 
        }

        setShowLoader(true)
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                "userName": userNameValue,
                "password": passwordValue
            }),
            headers: headers
        }).then(data => {
            if(data.ok) {
                return data.json()
            } else {
                setShowToast(true)
                return Promise.reject("error")
            }
        }).then(response => {
            console.log(response)
            navigate('/administrator', {
                state: {
                    ...response
                }
            })
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setShowLoader(false)
            setShouldLogIn(false)
        })
    }, [shouldLogIn])
    return (
        <Container fluid>
            <Row>
                <Col className='h-100' sm={3}>
                    <img className="admin-header_img img-fluid" src={promoImage}/>
                </Col>
                <Col className='d-flex' sm={9}>
                    <SupermarketTitle
                        titleComponent1 = "supermercado"
                        titleComponent2 = "Gran oferton"
                    />
                </Col>
            </Row>
            <div className='admin-form'>
                <div className='admin-form-container'>
                    <FormInput
                        title="Usuario"
                        iconUrl={usernameIcon}
                        isPassword={false}
                        value={userNameValue}
                        setValue={setUserNameValue}
                    />
                    <FormInput
                            title="Contraseña"
                            iconUrl ={keyIcon}
                            isPassword={true}
                            value={passwordValue}
                            setValue={setPasswordValue}
                        />
                    <Toast onClose={() => setShowToast(false)} delay={3000} autohide show={shouldShowToast}>
                <Toast.Body className='bg-primary text-white'>
                    Ocurrió un error en el Login
                </Toast.Body>
            </Toast>
                    <div className='admin-form_buttons'>
                        <PromotionButton 
                            title="Iniciar sesión"
                            clickMethod={() => {
                                console.log('login click')
                                setShouldLogIn(true)
                            }}
                        />
                        <PromotionButton 
                            title="Olvidé mi contraseña"
                        />
                    </div>
                </div>
            </div>

            {shouldShowLoader && <Loader/>}
            
            
        </Container>
    )
}

export {AdminLogin}