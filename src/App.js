import { Home } from './Views/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ProductsList } from './Views/ProductsList/ProductsList';
import { ProductDetail } from './Views/ProductDetail/ProductDetail';
import './App.css';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products-list' element={<ProductsList/>}/>
            <Route path='/product-detail' element={<ProductDetail/>}/>
            <Route path='*' element={<p>Not found 404</p>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
