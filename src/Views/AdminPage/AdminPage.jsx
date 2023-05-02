
import React from 'react'
import './dminPage.css'
import { Alert } from 'react-bootstrap'
function AdminPage() {
    const [id, setId] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [stock, setStock] = React.useState('')
    const [name, setName] = React.useState('')
    const createUrl = 'http://localhost:8089/oferton/api/products/save'
    const modificationUrl = 'http://localhost:8089/oferton/api/products/modify'
    const activationUrl = 'http://localhost:8089/oferton/api/products/modify/'
    const createProduct = (isNewProduct = true) => {
        const url = isNewProduct ? createUrl : modificationUrl
        if(price && stock && name) {
            let body = {
                "productName": name,
                "price": price,
                "stock": stock,
                "isPromotion": true,
                "description": ""
            }
            if (!isNewProduct ) {
                body.id = id
            }
            fetch(url, {
                method: isNewProduct ? 'post' : 'put',
                headers: 
                    {"Content-Type": 'application/json'},
                    
                body: JSON.stringify(body)
            }).then(data => {
                if (data.ok) {
                     return data.json()
                } else {
                    return Promise.reject('error')
                }
            }).then(result => {
                setId(result.id)
                alert("Proceso exitoso!")
            }).catch(error => {
                alert("Hubo un error")
            })
        }
    }

    const changeProductStatus = (isActive) => {
        if (id) {
            fetch(activationUrl + id + '?' + new URLSearchParams({
                "is_active": isActive
            })
            , {
                method: 'PATCH',
                headers: 
                    {"Content-Type": 'application/json'},
            })
            .then(data => {
                    console.log(data.json())
                    alert("Proceso exitoso!")
            }).catch(error => {
                console.log(error)
                alert("Hubo un error")
            })
        }
    }

    
    return (
        <>
        <div className="col-7 m-auto">
            <div className="d-flex justify-content-between align-items-center">
                <i className="bi bi-cart-check"></i>
                <h1 className='super-title title__primary text-center mt-5 mb-5'>Supermercado <span className='color__primary'>Gran oferton</span></h1>
            </div>
            <div className="formDetails d-flex flex-wrap justify-content-between col-12 m-auto">
                <div className="content-label d-flex justify-content-end col-12 mb-3">
                    <a href="" className="btn btn-danger mr-3">Consultar producto</a>
                    <label className="label__prom">
                        Producto en promociòn
                    </label>
                </div>
                <div className="form-floating m-0 mb-3 col-5">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <label htmlFor="floatingInput">Id del producto</label>
                </div>
                <div className="form-floating m-0 mb-3 col-5">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="floatingInput">Nombre del producto</label>
                </div>
                <div className="form-floating m-0 mb-3 col-5">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <label htmlFor="floatingInput">Precio</label>
                </div>
                <div className="form-floating m-0 mb-3  col-5">
                    <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    />
                    <label htmlFor="floatingInput">stok en unidades</label>
                </div>
                <div className="form-floating mb-3 col-5">
                    <select className="form-select" id="ubicacion_select" aria-label="Ubicacion">
                        <option value="Ubicacion">Ubicacion</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label htmlFor="ubicacion_select">Ubicacion</label>
                </div>
                <div className="form-floating mb-3 col-5">
                    <select className="form-select" id="color_select" aria-label="Color">
                        <option defaultValue="Color">Color</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label htmlFor="color_select">Color</label>
                </div>
                <div className="form-floating mb-3 col-5">
                    <select className="form-select" id="categoria_select" aria-label="Categoria">
                        <option defaultValue="Categoria">Categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label htmlFor="categoria_select">Categoria</label>
                </div>
                <div className="product__desc col-12">
                    <p className='title__primary'>Nombre producto</p>
                    <p>Descripcion del producto</p>
                </div>
                <div className="content__botons mt-3 col-12">
                    <button onClick={() => createProduct()} className="btn btn-danger">Registar producto nuevo</button>
                    <button onClick={() => createProduct(false)}  className="btn btn-danger">Modificar producto</button>
                    <button onClick={() => changeProductStatus(false)} className="btn btn-danger">Desactivar producto</button>
                    <button onClick={() => changeProductStatus(true)} className="btn btn-danger">Activar producto</button>
                </div>
            </div>
        </div>   
        </>
    )
}

export {AdminPage}