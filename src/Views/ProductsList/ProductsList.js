import './productsList.css'
import { ProductsListHeader } from './Components/ProductListHeader'
import { useUserInformation } from '../useUserInformation'
import { UserElements } from './Components/UserElements/UserElements'
import { SupermarketTitle } from './Components/SupermarketTitle/SupermarketTitle'
import car from '../../assets/cart.jpg'
function ProductsList() {
    const [
        user,
        profileUrl
 ] = useUserInformation()
const titleComponent1 = 'Supermercado'
const titleComponent2 = "Gran ofertón"
    return (
        <>
        <ProductsListHeader>
            <figure >
                <img src={car} className='product-list-header__image'/>
            </figure>
            {console.log(profileUrl)}
            <UserElements 
            userName={user.userName}
             profileImageUrl={user.profileUrl}
             />
        </ProductsListHeader>
        <SupermarketTitle 
            className="supermarket-title"
            titleComponent1={titleComponent1}
            titleComponent2 = {titleComponent2}
        />
        </>
    )
}

export {ProductsList}