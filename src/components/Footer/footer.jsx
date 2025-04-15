import './footer.css';
import { GiChickenOven } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import playstore from '../Food_img/play store.png';
import appstore from '../Food_img/app store.png';

export default function Footer(){
    return(
        <>
        <div className="footer-overall">
            <h2 className="footer-header"><span className='header-logo'><GiChickenOven /></span> Food Spot</h2>
            <h3 className='footer-sumarry'>Fresh and Healthy Food Specialties</h3>
            <div className="footer-box">
                <div className="link-box">
                    <h3>Quick Links</h3>
                    <a href="">Home</a>
                    <a href="">Dishes</a>
                    <a href="">Review</a>
                    <a href="">Conatct</a>
                </div>
                <div className="contact-box">
                    <h3>Contact</h3>
                    <h5><FaLocationDot /> Chennai,Tamil Nadu</h5>
                    <h5><FaPhoneAlt /> +91 9150xxxx87</h5>
                    <h5><MdEmail /> foodspot@gmail.com</h5>
                </div>
                <div className="app-box">
                    <h3>Download App</h3>
                    <a href=""><img src={playstore} /></a>
                    <a href=""><img src={appstore}  /></a>
                </div>
            </div>
        </div>
        </>
    )
}