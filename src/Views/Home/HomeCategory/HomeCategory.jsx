import '../HomeCategory/HomeCategory.css';

const HomeCategory = () => {
    return(
        <div className='content__category pt-5'>
            <h1 className='title__primary text-center mb-4'>Navega por categoría</h1>
            <div className="d-md-flex category__gap justify-content-center">
              <div className="category__items">
                  <img className='category__img' src="https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448749.jpg?t=st=1681694124~exp=1681694724~hmac=b2db58741a028664880bd53ba3244413637eecb733b510236e7be5de1a9792eb" alt="" />
                  <h4 className='category__title text-center mt-3'>Ropa</h4>
              </div>
              <div className="category__items">
                  <img className='category__img' src="https://img.freepik.com/premium-photo/home-appliances-gas-cooker-refrigerator-microwave-washing-machine-blender-toaster-coffee-machine-meat-ginder-kettle-3d-illustration_505080-48.jpg?w=826" alt="" />
                  <h4 className='category__title text-center mt-3'>Electrodomesticos</h4>
              </div>
              <div className="category__items">
                  <img className='category__img' src="https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1681772288~exp=1681772888~hmac=df565a1381e6aba33daaa30c393ee0e3dc8df1d3f193f9c34809dca967200570" alt="" />
                  <h4 className='category__title text-center mt-3'>Mercado</h4>
              </div>
            </div>
            
        </div>
    )
    
}

export default HomeCategory;