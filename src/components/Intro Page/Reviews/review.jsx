import './review.css';
// -------react slick--------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// -------------------------------
import leaf from '../../Food_img/leaf2.png';
import ReviewData from './ReviewData';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";



export default function Review(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
          ]
      };
    return(
        <>
        <div className="review-overall" id='review'>
            <h1 className='review-header'>Customer's Reviews</h1>
            {/* <div className="review-box"> */}
            <Slider {...settings}>
                {ReviewData.map((item)=>(
                    <div className="review-card">
                      <img src={leaf} className='leaf-img' />
                      <img src={item.customer_img} className='customer-img' />
                      <br />
                      <h1>{item.name}</h1>
                      <h1 className='recmment'>I recommend it!</h1>
                      <p className='customer-review-summary'>{item.summary}</p>
                       <hr />
                      <h2 className='customer-rating'>{item.rating == 4  ?<h2> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /> </h2>:
                      item.rating == 4.5 ? <h2> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </h2>:
                      item.rating == 5 ? <h2> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </h2>:null}</h2>
                    </div>
                ))}
            </Slider>
            {/* </div> */}
        </div>
        </>
    )
}