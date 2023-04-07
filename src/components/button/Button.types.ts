import { ReactNode } from "react";

export interface IButton {
    children: ReactNode | string;
    withIcon?: boolean;
    fullwidth?: boolean;
    style?: any;
    variant?: "text" | "outlined" | "contained" | undefined; 
    type?: "button" | "submit" | "reset" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
}