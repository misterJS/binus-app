import { memo, useMemo } from "react"
import { ITitle } from "./Title.types";
import styles from "./Title.module.css"
import classNames from "classnames";

const TitleMemo = (props: ITitle) => {
    const { variant, label } = props;

    const variantStyle = useMemo(
        () => ({
            [styles["binus-title-green"]]: variant === "green",
            [styles["binus-title-orange"]]: variant === "orange",
            [styles["binus-title-bigWhite"]]: variant === "bigWhite",
        }),
        [variant]
    );

    return (
        <p className={classNames(variantStyle)}>{label}</p>
    )
}

export const Title = memo(TitleMemo);