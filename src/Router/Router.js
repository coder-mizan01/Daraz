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
import SkinCare from '../Pages/SubPages/SkinCare';
import Cloths from '../Pages/SubPages/Cloths';
import Shoes from '../Pages/SubPages/Shoes';
import Tables from '../Pages/SubPages/Tables';

//Admin-auth
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateProduct from '../Pages/Admin/CreateProduct';
import Products from "../Pages/Admin/AdminProducts";
import Users from '../Pages/Admin/Users';


//auth
import Register from '../Pages/auth/Register';
import Login from '../Pages/auth/Login';
import Dashboard from '../Pages/User/Dashboard';



//component
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import BottomMenu from '../Layout/BottomMenu';


//Router
import UserRouter from './UserRouter';
import AdminRouter from './AdminRouter';




const Router = () => {
  return (
    <BrowserRouter>
    <Header />

     <Routes>
      
     <Route path='/dashboard' element={<UserRouter /> } >
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route path='/admin/dashboard' element={<AdminRouter /> } >
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard/createproduct' element={<CreateProduct />} />
        <Route path='/admin/dashboard/products' element={<Products />} />
        <Route path='/admin/dashboard/users' element={<Users />} />
      </Route>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/ElectronicAccessories/SmartPhones' element={<SmatrPhones />} />
        <Route path='/ElectronicAccessories/ComputerAccessories' element={<ComputerAccessories />} />

        <Route path='/healthcare/skincare' element={ <SkinCare />} />

        <Route path='/fashion/traditionalwears' element={<Traditionwears />} />
        <Route path='/fashion/westernwears' element={<WesternWears />} />

        <Route path='/Groceries/Cooking' element={<Cooking />} />
        <Route path='/Groceries/ChocolateCandies' element={<ChocoLates />} />

        <Route path='/fashion/cloths' element={<Cloths/>} />
        <Route path='/fashion/shoes' element={<Shoes/>} />

        <Route path='/furniture/table' element={<Tables />} />


        <Route path='/SingleProduct/:slug' element={<SingleProduct />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />

   
   
     </Routes>
   <BottomMenu />
   <Footer />
    </BrowserRouter>
  )
}

export default Router;