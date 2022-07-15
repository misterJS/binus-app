import { memo, useMemo } from "react"
import { ITitle } from "./Title.types";
import styles from "./Title.module.css"
import classNames from "classnames";

const TitleMemo = (props: ITitle) => {
    const { variant, label } = props;

    const variantStyle = useMemo(
        () => ({
            [styles["yfood-title-green"]]: variant === "green",
            [styles["yfood-title-orange"]]: variant === "orange",
            [styles["yfood-title-bigWhite"]]: variant === "bigWhite",
        }),
        [variant]
    );

    return (
        <p className={classNames(variantStyle)}>{label}</p>
    )
}

export const Title = memo(TitleMemo);