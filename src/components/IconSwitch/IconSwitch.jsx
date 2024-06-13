import styles from './iconSwitch.module.css'

export const IconSwitch = (props) => {
  const icon = props.icon;
  return (
    <div className={styles['icon']}>
      <span className={`${styles['material-icons']} ${styles['md-40']}`} onClick={ props.handleSwitch }>
        { icon }
      </span>
    </div>
  )
}
