export interface IProps {
    size?: 'normal' | 'small' | 'big',
    type?: 'default'| 'primary'| 'warning'| 'outline' | 'success'| 'info',
    disabled? : boolean,
    children?:any
}