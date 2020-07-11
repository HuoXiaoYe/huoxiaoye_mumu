import React, { useEffect } from "react";
import { generateClassName } from "@/ui/utils/utils"
import "./style.less"

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
export type ButtonSize = 'large' | 'normal' | 'small';

interface baseButtonProps {
    size: ButtonSize;
    type: ButtonType;
    disabled: 'disabled';
    className: string;
    children: React.ReactNode;
    plain: 'plain';
    circle: 'circle';
    loading: 'loading';
    icon: string;
}
type NativeButtonProps = baseButtonProps & {
    onClick?: React.MouseEventHandler<HTMLElement>;
};
type NativeAnchorProps = baseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
type buttonProps = Partial<NativeAnchorProps & NativeButtonProps>


// type node = React.ReactNode;
// let n:node = <div></div>
// type child = React.ReactChild


const Button: React.FC<buttonProps> = (props) => {
    const {
        size, type, disabled, plain, circle, loading, icon, className, ...rest
    } = props
    let btnClass = generateClassName("mu", {
        'button': true,
        [`${size}`]: !!size,
        [`${type}`]: !!type,
        [`${disabled}`]: !!disabled,
        [`${plain}`]: !!plain,
        [`${circle}`]: !!circle,
        [`${icon}`]: !!icon
    })
    useEffect(() => {
        // console.log(props)
    })
    function handleClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
        if (disabled) {
            return
        }
        if (props.onClick) {
            (props.onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e)
        }

    }

    function getLinkElement(): React.ReactNode {
        return <a href={props.href} className={btnClass} onClick={handleClick} target={props.target} {...rest}>
            {props.children}
        </a>
    }
    function getButtonElement(): React.ReactNode {
        return (
            <button className={btnClass} onClick={handleClick} {...rest}>
                {
                    loading ? <div className="mu-loading"></div> : ''
                }
                {
                    icon ? <i className={['iconfont', `icon-${icon}`].join(" ")}></i> : ''
                }
                {
                    props.children
                }
            </button>
        )
    }
    return (

        <div className={className}>
            {
                props.type === 'link' && props.href ? getLinkElement() : getButtonElement()
            }
        </div>


    )
}

Button.defaultProps = {
    type: 'default',
    size: 'normal',
    disabled: undefined,
}

export default Button