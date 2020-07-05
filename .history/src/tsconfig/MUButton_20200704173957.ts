export type ButtonType = 'default' | 'primary' | 'warning' | 'outline' | 'success' | 'info' | 'danger';
export interface IProps {
    size?: 'normal' | 'small' | 'big',
    type?: ButtonType,
    circle?: boolean,
    disabled?: boolean,
    children?: any
}