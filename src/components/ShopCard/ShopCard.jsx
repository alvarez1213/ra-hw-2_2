import styles from './shopCard.module.css'

import { v1 as uuidv1 } from 'uuid';

export const ShopCard = (props) => {
  const prod = props.product;
  return (
    <div key={ uuidv1() } className={styles['card']}>
      <h1 className={styles["card-title"]}>{ prod.name }</h1>
      <p className={styles["card-color"]}>{ prod.color }</p>
      <img src={ prod.img } alt="product" className={styles["card-img"]} />
      <p className={styles["card-price"]}>${ prod.price }</p>
      <button className={styles['card-btn']}>add to card</button>
    </div>
  );
};
