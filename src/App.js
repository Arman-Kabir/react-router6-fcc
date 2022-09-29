import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './final/pages/Products';
import Error from './pages/Error';
import SharedLayout from './final/pages/SharedLayout';
import SingleProduct from './final/pages/SingleProduct';

function App() {
  return <BrowserRouter>
    <nav>Our Nav</nav>
    <Routes>

      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About></About>} />
        <Route path="products" element={<Products></Products>} />

        <Route path='products/:productId' element={ <SingleProduct></SingleProduct> } />

        <Route path="*" element={<Error></Error>} />
      </Route>

      <Route path="dashboard" element={<div>Dashboard</div>}>
        <Route path='stats' element={<div>Stats</div>}></Route>

      </Route>


    </Routes>

    <footer>Our Footer</footer>

  </BrowserRouter>
}

export default App;
