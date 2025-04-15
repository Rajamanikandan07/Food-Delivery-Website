import { useEffect, useState } from 'react';
import './add_to_cart.css';
import { Link} from 'react-router-dom';

export default function Addtocart({ Cart, setCart,deliver,Order,setOrder }) {

    const removecart = (item) => {
        setCart(Cart.filter((c) => c.id !== item.id))
    }

    function increment(item) {
        const updateitem = Cart.map((i) => {
            if (i.id == item.id) {
                i.quantity++
            }
            return i;
        })
        setCart(updateitem)

        const updateorder = Order.map((i) => {
            if (i.id == item.id) {
                i.quantity++
            }
            return i;
        })
        setOrder(updateorder)
    };

    function decrement(item) {
        if(item.quantity >1){
        const updateitem = Cart.map((i) => {
            if (i.id == item.id) {
                    i.quantity--
            }
            return i;
        })
        setCart(updateitem)
        
        const updateorder = Order.map((i) => {
            if (i.id == item.id) {
                i.quantity--
            }
            return i;
        })
        setOrder(updateorder)
    }}
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(Cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0))
    }, [Cart])
    return (
        <>
            <div className="add-cart-overall">
                <div className="cart-nav-background"></div>
                <br />
                {Cart.length >=1 ?  <table> 
                    <thead>
                      <th>item</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove Cart</th>
                    </thead>
                    <tbody>
                        {Cart.map((item) => (<tr key={item.id}>
                            <td><img src={item.img} className='cart-img' /></td>
                            <td><h4 className='cart-name'>{item.name}</h4></td>
                            <td><h4 className='cart-price'>{item.price}</h4></td>
                            <td><button className='minus-btn' onClick={() => decrement(item)}>-</button> <h4>{item.quantity}</h4> <button className='plus-btn' onClick={() => increment(item)}>+</button></td>
                            <td><h4 className='cart-price'>{item.price * item.quantity}</h4></td>
                            <td><button className='remove-cart-btn' onClick={() => removecart(item)}>Remove Cart</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>:<h1 className='no-item'>No items here <br />Order now...!</h1>}
                <div className="order-footer">
                    <h3>Total Price:{total}</h3>
                    {Cart.length >=1 ? <Link to='/delivery' ><button className="order-btn" onClick={()=>deliver(total)}>Order</button></Link>:null}
                </div>
            </div>
        </>
    )
}