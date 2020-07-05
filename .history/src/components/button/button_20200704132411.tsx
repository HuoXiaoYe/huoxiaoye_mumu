import React, { useEffect,useState } from 'react'
import { IProps } from "@/tsconfig/MUButton"
import "./index.less"


function MUButton(props: IProps) {
    const [btnClass,setBtnClass] = useState<string[]>(['mu-btn'])
    useEffect(() => {
        console.log("initional");
        let tempBtnClass:string[] = []
        if(props.type){
            tempBtnClass.push('mu-' + props.type)
        }else{
            tempBtnClass.push('mu-primary')
        }
        if(props.size){
            tempBtnClass.push('mu-' + props.size)
        }else{
            tempBtnClass.push('mu-normal')
        }
        setBtnClass(tempBtnClass)
    },[props])
    return (
        <button type="button" className={[btnClass.join('')} disabled={props.disabled}>
            <i className="lake-loading"></i>
            <slot className="icon"></slot>
            <slot></slot>
        </button >
    )
}

export default MUButton