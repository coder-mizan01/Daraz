import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

//pages
import Home from "../Pages/Home";
import Error from '../Pages/Error';
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart';

//subpages

import Cooking from '../Pages/SubPages/Cooking';
import ChocoLates from '../Pages/SubPages/ChocoLates';
import SmatrPhones from "../Pages/SubPages/SmatrPhones";
import ComputerAccessories from "../Pages/SubPages/ComputerAccessories";
import Traditionwears from "../Pages/SubPages/Traditionwears";
import WesternWears from '../Pages/SubPages/WesternWears';
import Register from '../Pages/auth/Register';
import Login from '../Pages/auth/Login';
import Dashboard from '../Pages/User/Dashboard';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateCategory from '../Pages/Admin/CreateCategory';
import CreateProduct from '../Pages/Admin/CreateProduct';
import Products from "../Pages/Admin/AdminProducts"
import Users from '../Pages/Admin/Users'
import Orders from '../Pages/User/Orders';
import Profile from '../Pages/User/Profile';

//component
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PrivateRouter from './PrivateRouter';
import AdminRouter from './AdminRouter';




const Router = () => {
  return (
    <BrowserRouter>
    <Header />

     <Routes>
      
     <Route path='/dashboard' element={<PrivateRouter /> } >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/profile' element={<Profile />} />
        <Route path='/dashboard/orders' element={<Orders />} />
      </Route>

      <Route path='/admin/dashboard' element={<AdminRouter /> } >
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard/createcategory' element={<CreateCategory />} />
        <Route path='/admin/dashboard/createproduct' element={<CreateProduct />} />
        <Route path='/admin/dashboard/products' element={<Products />} />
        <Route path='/admin/dashboard/users' element={<Users />} />

      </Route>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/Groceries/Cooking' element={<Cooking />} />
        <Route path='/ElectronicAccessories/SmartPhones' element={<SmatrPhones />} />
        <Route path='/ElectronicAccessories/ComputerAccessories' element={<ComputerAccessories />} />
        <Route path='/Groceries/ChocolateCandies' element={<ChocoLates />} />
        <Route path='/fashion/traditionalwears' element={<Traditionwears />} />
        <Route path='/fashion/westernwears' element={<WesternWears />} />
        <Route path='/SingleProduct/:slug' element={<SingleProduct />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />

   
   
     </Routes>

     <Footer />
    </BrowserRouter>
  )
}

export default Router;