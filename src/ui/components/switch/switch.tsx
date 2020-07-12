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
    disabled?: 'disabled';
    loading?:"loading";
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}


const Switch: React.FC<SwitchProps> = ({ className = "", checked = false, size, disabled, onChange,loading }) => {
    const [switchID] = useState<string>('switch-' + Math.floor(Math.random() * 999999))
    const classes = generateClassName("mu", {
        [`${size}`]: !!size,
        [`${disabled}`]:!!disabled,
        [`${loading}`]:!!loading
    }, "mu-switch")
    console.log(classes)
    const [isChecked, setChecked] = useState<boolean>(checked)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (disabled || loading) {
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
            <label htmlFor={switchID} className={classes}>
                {loading ? <div className="loading"></div>:""}
            </label>
        </span>
    )
}

export default Switch

