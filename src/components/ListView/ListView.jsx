import { ShopItem } from '../ShopItem'

import styles from './listView.module.css'

export const ListView = (props) => {
  const products = props.products;
  return (
    <div className={styles['list']}>
        {products.map((prod) => (
          <ShopItem 
            product={ prod }
          />
        ))}
    </div>
  )
}
