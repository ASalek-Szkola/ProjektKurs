import Cookies from 'js-cookie';

import styles from './NavBar.module.css';
import DarkModeGifSwitch from "./DarkModeGifSwitch";
import ShoppingCartSVG from '../assets/shopping-cart.svg?react';
import UserIconSVG from '../assets/user-icon.svg?react';

export default function NavBar() {
    const iconWidth = parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-width'));
    const iconHeight = parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-height'));

    return (<>
        <div className={styles['wrapper']}>
            <nav className={styles["navbar"]}>
                <div className={styles['logo']}>
                    <a href="/">
                        Just Jaruzel It
                    </a>
                </div>

                <div className={styles['nav-links']}>
                    <div className={styles['shopping-cart-icon']}>
                        <ShoppingCartSVG width={iconWidth} height={iconHeight} />
                    </div>

                    <DarkModeGifSwitch />

                    {!Cookies.get("token") &&
                        <div className={styles['login-btn']}>
                            <a href='/login'>
                                Zaloguj się
                            </a>
                        </div>
                    }
                    {Cookies.get("token") &&
                        <div className={styles['user-icon']} >
                            <UserIconSVG width={iconWidth} height={iconHeight} />
                        </div>
                    }
                </div>
            </nav>
        </div>
        <hr />
    </>
    )
}