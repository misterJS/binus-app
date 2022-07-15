import { ReactNode } from "react";

export interface IButton {
    title: ReactNode | string;
    withIcon?: boolean;
}