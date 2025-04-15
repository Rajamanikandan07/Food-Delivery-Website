import './choose_us.css';
import slide from '../../Food_img/slide4.png';

export default function Choose(){
    return(
        <>
        <div className="choose-overall">
            <div className='choose-us-box'>
                <h1>Why Choos Us?</h1>
                <br />
                <p>Simplify your cravings with our seamless food order platform. We bring a diverse selection of local restaurants and cuisines right to your fingertips. Our user-friendly interface makes browsing menus, customizing orders, and secure payment a breeze. Choose us for a convenient and expansive culinary experience delivered directly to your door.</p>
            </div>
            <img src={slide}  />
        </div>
        </>
    )
}