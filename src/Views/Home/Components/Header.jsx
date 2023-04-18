import './Header.css'
const Header = () =>{
      return (
        <div className="navbar__bg--black">
            <nav className="navbar navbar-expand-sm  p-4 container justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones">
                <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">
            <i className="bi bi-cart-check"></i>
            </a>
            <div className="collapse navbar-collapse" id="opciones">   
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Registro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>            
                </ul>
            </div>
            </nav>
        </div>
      );
    }
    export default Header;