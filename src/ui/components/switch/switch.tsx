import React, { useState } from 'react'
import "./style.less"
import { generateClassName } from "../../utils/utils"

type switchType = "big" | "normal" | "small"

export interface SwitchProps {
    className?: string;
    checked: boolean;
    size?: switchType;
    bgColor?: string;
    activeColor?: string;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}


const Switch: React.FC<SwitchProps> = ({ className = "", checked = false, size, disabled, onChange }) => {
    const [switchID] = useState<string>('switch-' + Math.floor(Math.random() * 999999))
    const classes = generateClassName("mu", {
        [`${size}`]: !!size
    }, "mu-switch")
    const [isChecked, setChecked] = useState<boolean>(checked)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (disabled) {
            return
        }
        setChecked(e.target.checked)
        if (onChange) {
            (onChange as React.ChangeEventHandler<HTMLInputElement>)(e)
        }
    }
    return (
        <span className={className + " mu-switch-container"}>
            <input className="hello" id={switchID} checked={isChecked} type="checkbox" onChange={handleChange} />
            <label htmlFor={switchID} className={classes}></label>
        </span>
    )
}

export default Switch

