import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer__market bg-black p-4">
          <div className="container p-0 d-flex justify-content-between align-items-center">
            <span className='footer__legal'>® 2023 Poli Inc todos los derechos reservados</span>
            <ul className="content__list d-flex content__list--gap m-0 align-items-center">
              <li className="list__style"><i class="bi bi-twitter bi__font--size"></i></li>
              <li className="list__style"><i className="bi bi-facebook bi__font--size" /></li>
              <li className="list__style"><i className="bi bi-instagram bi__font--size" /></li>
              <li className="list__style">Contactanos</li>
            </ul>
          </div>
        </footer>
      );
}
export default Footer;