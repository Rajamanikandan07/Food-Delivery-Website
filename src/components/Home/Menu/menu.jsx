import './menu.css';
import MenuData from './MenuData';
import FoodCard from '../Food_card/food_card';
import FoodData from '../Food_card/FoodData';
import { useState } from 'react';
import fire from '../../Food_img/fire.jpg';
import HomeIntro from '../Home_intro/home_intro';

export default function Menu({Cart}) {
    const [Food, setFood] = useState(FoodData)

    const filteritems = (cat) => {
        const newitems = FoodData.filter((newval) => newval.category === cat)
        setFood(newitems)
    }

    return (
        <>
        <HomeIntro />
            <div className="menu-overall">
                <br />
                <h2>Explore our menu</h2>
                <p className='menu-summary'>Indulge in a culinary journey with our diverse menu, feauturing a range of delicious options to satify any craving. from classic comfort food to international flavours, our menu has something for  everyone.</p>
                <div className="menu-option-box">
                    <div className="menu-option">
                        <img src={fire} className="menu-img" onClick={() => setFood(FoodData)} />
                        <p>All</p>
                    </div>
                    {MenuData.map((item) => (
                        <div className="menu-option" key={item.id}>
                            <img src={item.img} className="menu-img" onClick={() => filteritems(item.category)} />
                            <p>{item.category}</p>
                        </div>
                    ))}
                </div>
                <br />
                <hr />
                    <FoodCard Food={Food} Cart={Cart}  />
            </div>
        </>
    )
}