import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeCategory from './HomeCategory/HomeCategory';
import HomeProductFeactured from './HomeProductFeactured/HomeProductFeactured';
import HomeOffers from './HomeOffers/HomeOferts';
import './home.css'
function Home() {
    return (
        <>
        <Header/>
        <div className="container__home pb-5">
            <h1 className='super-title title__primary text-center mt-5 mb-5'>Supermercado <span className='color__primary'>Gran oferton</span></h1>
                <div className="row">
                    <div className="col-12">
                        <HomeProductFeactured/>
                    </div>
                    <div className="container">
                        <HomeCategory/>
                    </div>
                    
                    <div className="container">
                        <HomeOffers/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export { Home }