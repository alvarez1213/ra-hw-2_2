import styles from './shopItem.module.css'

import { v1 as uuidv1 } from 'uuid';

export const ShopItem = (props) => {
  const prod = props.product;
  return (
    <div key={ uuidv1 } className={styles['item']}>
      <img src={ prod.img } alt="product" className={styles["item-img"]} />
      <h1 className={styles["item-title"]}>{ prod.name }</h1>
      <p className={styles["item-color"]}>{ prod.color  }</p>
      <p className={styles["item-price"]}>${ prod.price }</p>
      <button className={styles['item-btn']}>add to card</button>
    </div>
  )
}
