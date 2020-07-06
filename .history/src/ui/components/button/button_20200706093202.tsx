import React, { useEffect } from "react";

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
        <div>
            {/* hello mumu */}
            {
                props.children
            }
        </div>
    )
}

export default Button