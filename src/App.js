import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './final/pages/Products';
import Error from './pages/Error';
import SharedLayout from './final/pages/SharedLayout';
import SingleProduct from './final/pages/SingleProduct';
import Dashboard from './final/pages/Dashboard';
import Login from './final/pages/Login';
import ProtectedRoute from './final/pages/ProtectedRoute';
import SharedProductLayout from './final/pages/SharedProductLayout';

import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);


  return <BrowserRouter>
    <nav>Our Nav</nav>
    <Routes>

      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About></About>} />

        <Route path="products" element={<SharedProductLayout></SharedProductLayout>} >

          <Route index element={<Products></Products>} />
          <Route path=':productId' element={<SingleProduct></SingleProduct>} />

        </Route>


        <Route path='login' element={<Login
          setUser={setUser}
        ></Login>} />

        <Route path="dashboard" element={

          <ProtectedRoute user={user}>
            <Dashboard user={user}></Dashboard>
          </ProtectedRoute>



        }>

          <Route path="*" element={<Error></Error>} />
        </Route>


        <Route path='stats' element={<div>Stats</div>}></Route>

      </Route>


    </Routes>

    <footer>Our Footer</footer>

  </BrowserRouter>
}

export default App;
