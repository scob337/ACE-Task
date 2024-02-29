import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
 import { ADD } from "../../rtk/CartShop-Slice";
import { Push ,ToggleHide} from "../../rtk/Popup-Slice";


// Slider



export default function UpperSlider() {
    // Set Data from API To this State 
  const [Datas, setDatas] = useState([]);

    // Set Data from API To this State 

  // Config Swiper 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  let sliderRef = useRef  (null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  // Config Swiper 

  // Set PopUp Data 

  const [Popup, setPopup] = useState({})

  // Set PopUp Data 

  const dispatch = useDispatch()

  // Fetch Using Axios With useEffect
  useEffect(() => {
    async function Fetch() {
      try {
        const req = await axios.get(
          "https://fakestoreapi.com/products?limit=10"
        );
        const res = await req.data;
        setDatas(res);
      } catch (error) {
        console.log(error);
      }
    }
    Fetch();
  }, []);
  return (
    <>
    <article className="slider-container">
    <h1 className="Title">Hot Products</h1>
      <Slider  className="Slider-Section" ref={slider => {sliderRef = slider }}
        {...settings}>

        {Datas.map((el, index) => (
          <article className="slider-item" key={index}>
          <article className="IMG">
          <img src={el.image} alt="Hello"/>
          </article>
          <button onClick={()=>{ 
            setPopup(el)
            dispatch(Push(el))
            dispatch(ToggleHide(false))
          }}>QUICK VIWE</button>

          <article className="cart-footer">
          <article className="Text">

          <p>{el.description.substring(1,40)}</p>
          <h6>{el.price} EGP</h6>

          </article>
            <article className="Shop-Icon">
            <i className="fa-solid fa-bag-shopping" onClick={()=> dispatch(ADD(el))}></i>
            </article>
          </article>
          

          </article>
        ))}

      </Slider>
      <article className="Arrows">
      <i className="fa-solid fa-chevron-left" onClick={previous}>
        
      </i>
      <i className="fa-solid fa-chevron-right" onClick={next}>
      </i>
    </article>
    </article>
    </>
  );
}
