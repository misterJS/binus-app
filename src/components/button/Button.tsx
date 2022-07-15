import { memo, useMemo } from "react"
import { IButton } from "./Button.types";
import styles from "./Button.module.css"
import classNames from "classnames";

const ButtonMemo = (props: IButton) => {
    const { title, withIcon } = props;

    const withIconStyle = useMemo(
        () => ({
            [styles["yfood-button_with-icon"]]: withIcon === true,
            [styles["yfood-button_without-icon"]]: withIcon === false,
        }),
        [withIcon]
    );

    return (
        <>
            <button className={classNames(styles["yfood-button"], withIconStyle)}>{title}</button>
        </>
    )
}

export const Button = memo(ButtonMemo);