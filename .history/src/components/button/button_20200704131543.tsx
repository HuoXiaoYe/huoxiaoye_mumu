import React, { useEffect } from 'react'
import { IProps } from "@/tsconfig/MUButton"
import "./index.less"


function MUButton(props: IProps) {
    useEffect(() => {
        console.log("initional")
    })
    return (
        <button type="button" class="lake-btn" : class="btnClass" disabled={props.disabled}>
            <i class="lake-loading" v-if="loading"></i>
            <slot name="icon"></slot>
            <slot></slot>
        </button >
    )
}

export default MUButton