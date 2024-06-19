import { ShopCard } from '../ShopCard'

import styles from './cardsView.module.css'

import { v1 as uuidv1 } from 'uuid';

export const CardsView = (props) => {
  const products = props.products;

  return (
    <div className={styles['cards']}>
      {products.map((prod) => (
        <ShopCard key={ uuidv1() } product={ prod } />
      ))}
    </div>
  )
}
