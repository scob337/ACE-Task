import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Style from "../../Styles/Popup.module.css";
import { ToggleHide } from "../../rtk/Popup-Slice";
import { ADD } from "../../rtk/CartShop-Slice";

export default function Popup() {
  const Pro = useSelector((state) => state.Popup.Product);
  const Hide = useSelector((state) => state.Popup.Hide);
  const displatch = useDispatch();
  useEffect(() => {}, [Pro]);
  return (
    <>
      <section
        className={`${Style.Popup_container} + Popup_container`}
        style={{ display: Hide ? "none" : "flex" }}
      >
        <article className={Style.popupContainer}>
        <i
        onClick={() => displatch(ToggleHide(true))}
        className={`${Style.fa_x} + fa-solid fa-x`}
        style={{
          width: "100%",
          textAlign: "right",
          padding: "10px",
          fontSize: "36px",
          cursor: "pointer",
          zIndex:"99",
          color:"#fff",

        }}
      ></i>
          <article className={`${Style.wraper} `}>


            <article className={Style.IMG}>
              <img src={Pro.image} className={Style.Image} alt="Anything" />
            </article>
            <article
              className={`${Style.popup_text} + popup_text `}
              style={{
                overflow:"auto"
              }}
            >
              <article>


                <h1>{Pro.title}</h1>
                <p>{Pro.description}</p>
              </article>
              <article className={Style.Chose_size}>
                <span>
                CHOOSE SIZE </span>
                <select>
                  <option>Chose An Option</option>
                  <option>46</option>
                  <option>48</option>
                  <option>50</option>
                  <option>52</option>
                  <option>54</option>
                  <option>56</option>
                  <option>58</option>
                  <option>60</option>
                </select>
              </article>
              <article className="btns mt-5 ">
                <input
                  className="p-3"
                  type="number"
                  placeholder="1"
                  style={{ width: "70px", textAlign: "center" }}
                />
                <button
                  className="p-3 m-2 btn btn-outline-dark"
                  style={{ fontWeight: 600 }}
                  onClick={()=>displatch(ADD(Pro))}
                >
                  ADD TO CART

                </button>
                <p>
                   - CATEGORY: {Pro.category}
                </p>
              </article>
            </article>
          </article>
        </article>
      </section>
    </>
  );
}
