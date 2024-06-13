import { ShopCard } from '../ShopCard'

import styles from './cardsView.module.css'

export const CardsView = (props) => {
  const products = props.products;

  return (
    <div className={styles['cards']}>
      {products.map((prod) => (
        <ShopCard product={ prod } />
      ))}
    </div>
  )
}
