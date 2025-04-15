import briyani from "../../Food_img/noodles.png";
import leaf from "../../Food_img/leaf2.png";
import './home_intro.css';

export default function HomeIntro() {
    return (
        <>
            <div className="home-welcome-page">
                <div className="home-intro">
                    <div className="home-intro-content">
                        <h1>Order Your Favourite Here</h1>
                        <p>variety of fresh and fresh food served just for you,your
                            solution when hungry in the middle of the night with super fast  delivery.</p>
                        <br />
                        <button className="order-now-btn"><h4>Order Now </h4></button>
                    </div>
                    <img src={briyani} className="c-briyani" />
                    <img src={leaf} className="home-leaf" />
                </div>
            </div>
        </>
    )
}