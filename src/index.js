import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './Common/css/constants.css'
import Footer from './Views/Home/Components/Footer';
import Header from './Views/Home/Components/Header';
import HomeCategory from './Views/Home/HomeCategory/HomeCategory';
import HomeProductFeactured from './Views/Home/HomeProductFeactured/HomeProductFeactured';
import HomeOffers from './Views/Home/HomeOffers/HomeOferts';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <div className="container__home pb-5">
        <h1 className='title__primary text-center mt-5 mb-5'>Supermercado <span className='color__primary'>Gran oferton</span></h1>
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
    <App />
    <Footer/>
    </>
    
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
