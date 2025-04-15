import { toast } from 'react-toastify';
import './myorders.css';

export default function Myorder({ Paymentmethod,setPaymentmethod, Order,setOrder,deliverTotal }) {

    function cancelorder(){
        setOrder([])
        setPaymentmethod(0)
        toast.error("cancel your order")
    }

    return (
        <>
            <div className="myorder-overall">
                <div className="cart-nav-background"></div>
                <div className="my-order-box">
                    <h2>My Orders</h2>
                    {Paymentmethod == 'Net Banking' || Paymentmethod == 'Cash on Delivey'? <>
                     <div className="order-table">
                        <h3>Items</h3>
                        <h3>Amount</h3>
                        <h3>Payemnt Method</h3>
                        <h3>Cancel Order</h3>
                    </div>
                    <div className="order-table">
                        <h4>{Order.length}</h4>
                        <h4>{deliverTotal}</h4>
                        <h4>{Paymentmethod}</h4>
                        <h4><button className='cancel-order-btn' onClick={cancelorder}>Cancel Order</button></h4>
                    </div></>: <h3>No items here <br />Order Now..!</h3>}

                </div>
            </div>
        </>
    )
}