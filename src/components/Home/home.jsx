import { useState } from 'react';
import Addtocart from './Add_to_cart/add_to_cart';
import Home_Nav from './Home_nav/home_nav';
import Menu from './Menu/menu';
import './home.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import Deliver from './Deliver_page/deliver';
import Myorder from './My orders/myorders';

export default function Home() {

    const [Cart, setCart] = useState([])
    const[Order,setOrder]=useState([])
    

    const Addcart = (item) => {
            setCart([...Cart, { ...item, quantity: +1 }])
            setOrder([...Order, {...item, quantity: +1 }])
            toast.success(`${item.name} added successfully..!`)
    }

  const [deliverTotal,setDeliverTotal]=useState(0)
   const deliver = (item)=>{
        const total = item 
        setDeliverTotal(total)
    }

  const[Paymentmethod,setPaymentmethod] =useState(0)
  
  const paymentmethod=(method)=>{
    if(method == 0){
        const paymethod = 'Net Banking'
        setPaymentmethod(paymethod)
        setCart([])
    }
    else{
        const paymethod = 'Cash on Delivey'
        setPaymentmethod(paymethod)
        toast.success('your orderis confirmed')
        setCart([])    
    }
  }

    return (
        <>
            <div className="home-overall">
            <BrowserRouter>
                <ToastContainer theme='dark' position="top-center"autoClose={2000} />
                    <Home_Nav Cart={Cart}  />
                    <Routes>
                        <Route path='Food-Delivery-Website' element={<Menu Cart={Addcart} />} />
                        <Route path='add-to-cart' element={<Addtocart Cart={Cart} setCart={setCart} deliver={deliver} Order={Order} setOrder={setOrder}/>} />
                        <Route path='delivery' element={<Deliver deliverTotal={deliverTotal}  paymentmethod={paymentmethod}/>}/>
                        <Route path='my_order' element={<Myorder Paymentmethod={Paymentmethod} setPaymentmethod={setPaymentmethod} Order={Order} setOrder={setOrder} deliverTotal={deliverTotal} />} />
                    </Routes>
            </BrowserRouter>

            </div>
        </>
    )
}