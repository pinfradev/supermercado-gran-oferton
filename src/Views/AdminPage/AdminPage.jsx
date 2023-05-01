
import './dminPage.css'
function AdminPage() {
    return (
        <>
        <div className="col-7 m-auto">
            <div className="d-flex justify-content-between align-items-center">
                <i class="bi bi-cart-check"></i>
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
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Id del producto</label>
                </div>
                <div className="form-floating m-0 mb-3 col-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Nombre del prodcuto</label>
                </div>
                <div className="form-floating m-0 mb-3 col-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Precio</label>
                </div>
                <div className="form-floating m-0 mb-3  col-5">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">stok en unidades</label>
                </div>
                <div class="form-floating mb-3 col-5">
                    <select class="form-select" id="ubicacion_select" aria-label="Ubicacion">
                        <option selected>Ubicacion</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="ubicacion_select">Ubicacion</label>
                </div>
                <div class="form-floating mb-3 col-5">
                    <select class="form-select" id="color_select" aria-label="Color">
                        <option selected>Color</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="color_select">Color</label>
                </div>
                <div class="form-floating mb-3 col-5">
                    <select class="form-select" id="categoria_select" aria-label="Categoria">
                        <option selected>Categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="categoria_select">Categoria</label>
                </div>
                <div className="product__desc col-12">
                    <p className='title__primary'>Nombre producto</p>
                    <p>Descripcion del producto</p>
                </div>
                <div className="content__botons mt-3 col-12">
                    <a href="" className="btn btn-danger">Registar producto nuevo</a>
                    <a href="" className="btn btn-danger">Modificar producto</a>
                    <a href="" className="btn btn-danger">Desactivar producto</a>
                    <a href="" className="btn btn-danger">Consultar</a>
                </div>
            </div>
        </div>   
        </>
    )
}

export {AdminPage}