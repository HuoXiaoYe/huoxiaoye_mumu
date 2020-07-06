import React, { useEffect } from "react";
import "./style.less"
import {generateClassName} from "@/ui/utils/utils"

export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
export type ButtonSize = 'large' | 'normal' | 'small';

interface baseButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<baseButtonProps> = (props) => {
    const {
        size, type,disabled,
    } = props
    let btnClass = generateClassName("btn",{
        'mu-button':true,
        [`mu-${size}`]:size,
        
    })
    useEffect(() => {
        // console.log(props)
        
    })
    return (
            <button className={btnClass}>
                {
                    props.children
                }
            </button>

    )
}

export default Button