import React, {ReactNode} from "React"
export type ButtonType = 'default' | 'primary' | 'warning' | 'outline' | 'success' | 'info' | 'danger' | '';
export type BUttonSize = 'normal' | 'small' | 'big';
export interface IProps {
    size?: BUttonSize,
    type?: ButtonType,
    circle?: boolean,
    disabled?: boolean,
    children?: ReactNode,
    [key: string]: any;
}