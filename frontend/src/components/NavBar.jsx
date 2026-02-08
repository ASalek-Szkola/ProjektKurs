import styles from './NavBar.module.css';
import DarkModeGifSwitch from "./DarkModeGifSwitch";
import ShoppingCartIcon from './ShoppingCartIcon';

export default function NavBar() {
    return ( <>
        <nav className={styles["navbar"]}>
            <div className={styles['logo']}>
                Just Jaruzel It
            </div>

            <div className={styles['nav-links']}>
                <ShoppingCartIcon />

                <DarkModeGifSwitch width={50} height={50} />

                <div className={styles['login-btn']}>   
                    <a>
                        Zaloguj się
                    </a>
                </div>
            </div>
        </nav>
        <hr />
        </>
    )
}