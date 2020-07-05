import React, { useEffect,useState } from 'react'
import { IProps } from "@/tsconfig/MUButton"
import "./index.less"


function MUButton(props: IProps) {
    useEffect(() => {
        console.log("initional");

    })
    return (
        <button type="button" className="lake-btn" disabled={props.disabled}>
            <i className="lake-loading"></i>
            <slot className="icon"></slot>
            <slot></slot>
        </button >
    )
}

export default MUButton