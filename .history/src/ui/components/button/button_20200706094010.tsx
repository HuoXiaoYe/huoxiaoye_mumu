import React, { useEffect } from "react";
import "./style.less"

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
    useEffect(() => {
        console.log(props)
    })
    return (
            <button className="mu-button">
                {
                    props.children
                }
            </button>

    )
}

export default Button