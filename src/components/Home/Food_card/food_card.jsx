import './food_card.css';
import { MdOutlineAddCircle } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function FoodCard({Food,Cart}) {

    return (
        <>
            <div className="foodcard-overall">
                {Food.map((item) => (
                    <div className="Food-card" key={item.id}>
                        <div className="foodcard-img-box">
                            <img src={item.img} className='foodcard-img' />
                        </div>
                        <h2 className='food-name'>{item.name}</h2>
                        <br />
                        <h2 className='food-price'>Rs.{item.price}</h2>
                        <br />
                        <div className="foodcard-rating-box">
                            <h3 className='food-rating'><TiStarFullOutline /> {item.rating} / 5</h3>
                            <h1 className='add-to-card-btn' onClick={()=>Cart(item)}><MdOutlineAddCircle /></h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}