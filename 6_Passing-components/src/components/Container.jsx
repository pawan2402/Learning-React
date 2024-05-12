import styles from './Container.module.css'

const Container = ({children}) => {
    return <div className={styles.container}>{children}</div> //using props children
}

export default Container;