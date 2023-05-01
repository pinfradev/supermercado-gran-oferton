import { Home } from './Views/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ProductsList } from './Views/ProductsList/ProductsList';
import { ProductDetail } from './Views/ProductDetail/ProductDetail';
import { AdminLogin } from './Views/AdminLogin/AdminLogin';
import './App.css';
import { AdminPage } from './Views/AdminPage/AdminPage';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products-list' element={<ProductsList/>}/>
            <Route path='/product-detail' element={<ProductDetail/>}/>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path="/administrator" element={<AdminPage/>}/>
            <Route path='*' element={<p>Not found 404</p>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
