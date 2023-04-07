import { memo, useMemo } from "react"
import { IButton } from "./Button.types";
import styles from "./Button.module.css"
import classNames from "classnames";
import { Button as MuiButton } from '@mui/material';

const ButtonMemo = (props: IButton) => {
    const {
        children,
        withIcon,
        variant,
        type,
        fullwidth,
        color,
        style
    } = props;
    

    const withIconStyle = useMemo(
        () => ({
            [styles["binus-button_with-icon"]]: withIcon === true,
            [styles["binus-button_without-icon"]]: withIcon === false,
        }),
        [withIcon]
    );

    const ColorStyle = useMemo(
        () => ({
            [styles["binus-button_primary"]]: color === "primary" && variant === "contained",
            [styles["binus-button_secondary"]]: color === "secondary" && variant === "contained",
            [styles["binus-button_info"]]: color === "info" && variant === "contained",
            [styles["binus-button_warning"]]: color === "warning" && variant === "contained",
            [styles["binus-button_primary_outline"]]: color === "primary" && variant === "outlined",
            [styles["binus-button_secondary_outline"]]: color === "secondary" && variant === "outlined",
            [styles["binus-button_primary_text"]]: color === "primary" && variant === "text",
            [styles["binus-button_secondary_text"]]: color === "secondary" && variant === "text",
        }),
        [color]
    );

    return (
        <>
            <MuiButton
                fullWidth={fullwidth}
                variant={variant}
                type={type}
                sx={style}
                className={classNames(styles["binus-button"], withIconStyle, ColorStyle)}
            >
                {children}
            </MuiButton>
        </>
    )
}

export const Button = memo(ButtonMemo);