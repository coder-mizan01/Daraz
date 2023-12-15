import React from 'react'
import {Routes,Route} from "react-router-dom";
import { HashRouter as BrowserRouter} from "react-router-dom"

//pages
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart';

/*
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
*/

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
import MobileMune from "../Layout/MobileMenu";
import { categories } from '../Component/Categories';



//Router
import PrivateUserRouter from './PrivateUserRouter';
import PrivateAdminRouter from './PrivateAdminRouter';
import UpdateProduct from '../Pages/Admin/UpdateProduct';
import TopHeader from '../Layout/TopHeader';
import ConfirmOrderPage from '../Layout/ConfirmOrderPage';
import CC from '../CC';


// Import your components dynamically
const dynamicComponents = {
  mouse: React.lazy(() => import('../Pages/MenuPages/Computer_Items/Mouse')),
  keyboard : React.lazy(()=> import('../Pages/MenuPages/Computer_Items/Keyboard')),
  mouse_pad : React.lazy(()=>import('../Pages/MenuPages/Computer_Items/Mouse_pad')),
  charger : React.lazy(()=>import('../Pages/MenuPages/Mobile_Accessories/Charger')),
  wireless_charger : React.lazy(()=>import('../Pages/MenuPages/Mobile_Accessories/Wireless_charger')),
  battery : React.lazy(()=> import("../Pages/MenuPages/Mobile_Accessories/Battery")),
  
};

const LazyComponent = ({ componentName }) => {
  const Component = dynamicComponents[componentName];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </React.Suspense>
  );
};


const Router = () => {

  return (
    <BrowserRouter>
    <TopHeader />
     <Header />
     <Routes>
    

     
     <Route path='/dashboard' element={<PrivateUserRouter /> } >
     <Route path='/dashboard' element={<Dashboard />} />
      </Route>
  
      <Route path='/admin/dashboard' element={<PrivateAdminRouter /> } >
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard' element={<CreateProduct />} />
        <Route path='/admin/dashboard' element={<Products />} />
        <Route path='/admin/dashboard' element={<Users />} />
      </Route>
      
      <Route path='/admin/dashboard/editproduct' element={< UpdateProduct/>} />

        <Route path='/' element={<Home />} />

        {categories.computer_items.map((Item,i)=>{
          return <Route key={i} path={`/computer_items/${Item}`}  element={<LazyComponent componentName={Item} />}/>
        })}

        {categories.Mobile_Accessories.map((Item,i)=>{
          return <Route key={i} path={`/Mobile_Accessories/${Item}`} element={<LazyComponent componentName={Item}/>} />
        })}


     {/*     <Route path='/healthcare/skincare' element={ <SkinCare />} />

        <Route path='/fashion/traditional-wears' element={<Traditionwears />} />
        <Route path='/fashion/western-wears' element={<WesternWears />} />

        <Route path='/fashion/cloths' element={<Cloths/>} />
        <Route path='/fashion/shoes' element={<Shoes/>} />

        <Route path='/groceries/cooking' element={<Cooking />} />
        <Route path='/groceries/chocolate-candies' element={<ChocoLates />} />

        <Route path='/furniture/table' element={<Tables />} />
        <Route path='/furniture/sofa' element={<Sofa />} />
 */}

        <Route path='/SingleProduct/:slug' element={<SingleProduct />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/confirm-order' element={<ConfirmOrderPage />} />
        <Route path='/mobile-menu' element={<MobileMune />} />
        <Route path='/admin/cc' element={<CC />} />


   
   
     </Routes>
   <BottomMenu />
   <Footer />
    </BrowserRouter>
  )
}

export default Router;



