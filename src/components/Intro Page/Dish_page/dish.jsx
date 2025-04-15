import './dish.css'
import { FaStar } from "react-icons/fa";
import DishData from './dishdata';

export default function Dish() {
    return (
        <>
            <div className="dish-overall" id='dish'>
                <h1 className='dish-header'>Our Popular Dishes</h1>
                <br />
                <div className="dish-box">
                    {DishData.map((item) => (<div className="dish-card">
                        <div className="dish-img-box">
                            <img src={item.img} className='dish-img' />
                        </div>
                        <h2>{item.name}</h2>
                        <br />
                        <h3>Rs.{item.price}</h3>
                        <br />
                        <h3 className='dish-rating'><FaStar /> {item.rating} / 5</h3>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}