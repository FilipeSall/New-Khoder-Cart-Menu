import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./productmenu.module.css";

function ItemCard({ img, text, price, num }) {
  const { totalPrice, setTotalPrice, setShouldAnimatePrice,listProductCart , setListProductCart } = useContext(GlobalContext);

  const handleClick = () => {
    const priceNum = Number(price.slice(1).replace(",", "."));
    const totalPriceNum = totalPrice + priceNum;
    setTotalPrice(parseFloat(totalPriceNum.toFixed(2)));
    
    const newListProduct = [...listProductCart, { text, price }];
    setListProductCart(newListProduct);

    setShouldAnimatePrice(true);
    setTimeout(() => {
      setShouldAnimatePrice(false);
    }, 200);
  };

  return (
    <div className={styles.itemCard} onClick={handleClick}>
      <div className={styles.ImgWrapper}>
        <p className={styles.itemNum}>{num}</p>
        <img
          src={img}
          alt={text}
          className={styles.itemImg}
          width="200"
          height="200"
        />
      </div>
      <div className={styles.priceWrapper}>
        <p
          className={`${text.length > 10 ? styles.lowCase : styles.normalCase}`}
        >
          {text}
        </p>
        <p className={styles.itemPrice}>{price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
