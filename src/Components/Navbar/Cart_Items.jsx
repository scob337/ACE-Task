import { useSelector, useDispatch } from "react-redux";
import Style from "../../Styles/Cart.module.css";
import { DELETE, increaseCount, decreaseCount } from "../../rtk/CartShop-Slice";
export default function CART_ITEMS() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Cart);

  return (
    <ul className={Style.List_Container}>
      {Products?.map((el) => {
        return (
          <>
            <li key={el.id} className={Style.list}>
              <article className={Style.productinfo}>
                <img src={el.image} alt="This is ACE" />
                <h3>{el.title.substring(1,30) }...</h3>
                <br></br>

                <span>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => dispatch(increaseCount(el))}
                  ></i>{" "}
                  <p>Quantity: {el.quantity}</p>{" "}
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => dispatch(decreaseCount(el))}
                  ></i>
                </span>
              </article>
              <i
                className="fa-solid fa-x"
                onClick={() => dispatch(DELETE(el))}
              ></i>
            </li>
            <hr />
          </>
        );
      })}
    </ul>
  );
}
