export interface IProps {
    size?: 'normal' | 'small' | 'big',
    type?: 'default'| 'primary'| 'warning'| 'outline' | 'success',
    disabled? : boolean,
    children?:any
}