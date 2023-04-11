import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <p> Este es el home... en construccion</p>
            <Link to="/products-list">Ir a lista de productos</Link>
        </div>
    )
}

export { Home }