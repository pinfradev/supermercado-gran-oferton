import { Home } from './Views/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<p>Not found 404</p>}/>
        </Routes>``
    </HashRouter>
  );
}

export default App;
