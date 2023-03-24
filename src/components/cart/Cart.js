import React, { useContext, useState } from 'react';
import { GlobalContext} from '../../GlobalContext';
import styles from './Cart.module.css';

function Cart() {

  const {totalPrice,setTotalPrice, shouldAnimatePrice, listProductCart, setListProductCart} = useContext(GlobalContext);

  const handleClick = () => {
    setListProductCart([]);
    setTotalPrice(0)
  }

  return (
    <section className={`${styles.maxHeightContainer } ${styles.container}`}>
      <div className={styles.title__container}>

      </div>
      <div className={styles.priceDisplay}>
        <div className={styles.productListContainer}>
          {listProductCart.map((product, i) => (
            <ul className={styles.productList} key={i}>
              <li className={styles.listProductTxt}>{product.text}</li>
              <li>{product.price}</li>
            </ul>
          ))}
        </div>
        <div className={`${styles.finalPrice} ${shouldAnimatePrice ? styles.priceBounce : ''}`}>
          <p >R${totalPrice}</p>
        </div>
      </div>
      <button className={styles.NewCartBtn} onClick={handleClick}>
          NOVA COMPRA
        </button>
    </section>
  )
}

export default Cart