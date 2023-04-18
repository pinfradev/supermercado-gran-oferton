import '../HomeOffers/HomeOferts.css';
const HomeOferts = () => {
    return(
        <div className='content__oferts container pt-5' >
            <h1 className="text-center mb-4 title__primary">¡Aprovecha ofertas exclusivas</h1>
            <div className="d-md-flex category__gap">
            <div className="oferts__items col-md-6">
                    <img className='oferts__img' src="https://img.freepik.com/free-photo/room-interior-design_23-2148899490.jpg?w=900&t=st=1681776344~exp=1681776944~hmac=e1215e256dfab0930e118499f1540f6cefb0ae8650986247a5cb50c2d6ecdfc0" alt="" />
                    <h2 className='oferts__title--product text-left mt-3'>Televisor Samsung 65 pulgadas LED 4K Ultra HD Smart TV</h2>
                    <h4 className='oferts__price text-left mt-3'>$ 899.900</h4>
                    <h4 className='oferts__price--antes text-left mt-3'>$ 1.100.900</h4>
                </div>
                <div className="oferts__items col-md-3">
                    <img className='oferts__img' src="https://img.freepik.com/free-photo/front-view-young-male-preparing-dirty-clothes-washer-white-wall_140725-107729.jpg?w=740&t=st=1681776627~exp=1681777227~hmac=b6adf6af66534d9a021a82fe180ddf3bf4e1d75f07de614714cf6f7d8314ddc8" alt="" />
                    <h2 className='oferts__title--product text-left mt-3'>Lavadora secadora</h2>
                    <h4 className='oferts__price text-left mt-3'>$ 3.500.000</h4>
                    <h4 className='oferts__price--antes text-left mt-3'>$ 4.500.000</h4>
                </div>
                <div className="oferts__items col-md-3">
                    <img className='oferts__img' src="https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141321.jpg?w=740&t=st=1681776483~exp=1681777083~hmac=a9ff00b116cb0589c04b00567d80fa4cd662d727c695cfdab6bf63b0867a8590" alt="" />
                    <h2 className='oferts__title--product text-left mt-3'>Iphone 14 Pro Max</h2>
                    <h4 className='oferts__price text-left mt-3'>$ 5.500.000</h4>
                    <h4 className='oferts__price--antes text-left mt-3'>$ 6.000.000</h4>
                </div>
               
            </div>
            
        </div>
       
    )
}
export default HomeOferts;