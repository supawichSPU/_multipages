import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router';
import './layouts.css'   

function Layouts({products,carts, setToken }) {
   
    return (
        <div>
            <Header/>
            <Navbar products={products} carts={carts} setToken={setToken} />
            <Outlet/>
            <Footer/>
        </div> 
    );
}

export default Layouts;