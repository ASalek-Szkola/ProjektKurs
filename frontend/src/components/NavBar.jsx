import Cookies from 'js-cookie';

import styles from './NavBar.module.css';
import DarkModeGifSwitch from "./DarkModeGifSwitch";
import ShoppingCartIcon from './ShoppingCartIcon';
import UserIconSVG from '../assets/user-icon.svg?react';

export default function NavBar() {
    return (<>
        <div className={styles['wrapper']}>
            <nav className={styles["navbar"]}>
                <div className={styles['logo']}>
                    <a href="/">
                        Just Jaruzel It
                    </a>
                </div>

                <div className={styles['nav-links']}>
                    <ShoppingCartIcon />

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
                        <UserIconSVG width={parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-width'))} height={parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-height'))} />
                    </div>
                    }
                </div>
            </nav>
        </div>
        <hr />
    </>
    )
}