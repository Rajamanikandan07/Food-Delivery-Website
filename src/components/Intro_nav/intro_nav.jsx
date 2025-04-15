import './intro_nav.css';
import { GiChickenOven } from "react-icons/gi";


export default function IntroNav(){
    return(
        <>
        <nav>
            <div className='web-site-heading'> 
                <h1 className='nav-icon'><GiChickenOven /></h1>
                <h1>Food Spot</h1>
            </div>
            <div className='web-site-link-box'>
                <a href=""> <h4>Home</h4></a>
                <a href="#dish"><h4>Dish</h4></a>
                <a href="#review"><h4>Review</h4></a>
                <a href=""><h4>About</h4></a>
            </div>
        </nav>
        </>
    )
}