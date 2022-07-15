import { memo } from "react"
import styles from "./Sidebar.module.css"

const SideBarMemo = () => {
    return (
        <div className={styles["yfood-sidebar"]}>
            <img alt="document" src={'/icons/document.svg'} />
            <img alt="home" src={'/icons/home.svg'} />
            <img alt="settings" src={'/icons/settings.svg'} />
            <img alt="box" src={'/icons/box.svg'} />
            <img alt="people-group" src={'/icons/peopleGroup.svg'} />
            <img alt="wallet" src={'/icons/wallet.svg'} />
            <img alt="chat" src={'/icons/chat.svg'} />
            <img alt="mail" src={'/icons/mail.svg'} />
            <img alt="dashboard" src={'/icons/dashboard.svg'} />
            <img alt="file" src={'/icons/file.svg'} />
            <img alt="settings" src={'/icons/settings.svg'} />
        </div>
    )
}

export const Sidebar = memo(SideBarMemo)