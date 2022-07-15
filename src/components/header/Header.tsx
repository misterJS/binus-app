import { memo } from "react"
import styles from "./Header.module.css"

const HeaderMemo = () => {
    return (
        <div className={styles["yfood-header"]}>
            <div className={styles["yfood-header__first-side"]}>
                <div className={styles["yfood-header__logo"]}>
                    <img alt="logo" src={'/icons/mainLogo.svg'} />
                    <img alt="arrow-down" src={'/icons/arrowDown.svg'} />
                </div>
                <img alt="burger-menu" src={'/icons/burgerMenu.svg'} />
            </div>

            <div className={styles["yfood-header__second-side"]}>
                <img alt="arrow-down" src={'/icons/search.svg'} />
                <img alt="arrow-down" src={'/icons/bell.svg'} />
                <div className={styles["yfood-header__second-content"]}>
                    <img className={styles["yfood-header__avatar"]} alt="avatar" src={'/photos/people.png'} />
                    <p>Sami El Hadery</p>
                    <img className={styles["yfood-header__arrow-down"]} alt="arrow-down" src={'/icons/arrowDown.svg'} />
                </div>
            </div>
        </div>
    )
}

export const Header = memo(HeaderMemo);