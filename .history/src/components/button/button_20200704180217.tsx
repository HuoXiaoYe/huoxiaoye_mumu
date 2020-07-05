import React, { useEffect,useState, MouseEvent } from 'react'
import { IProps } from "@/tsconfig/MUButton"
import "./index.less"


function MUButton(props: IProps) {
    const [btnClass,setBtnClass] = useState<string[]>(['mu-button'])
    useEffect(() => {
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
        if(props.disabled){
            tempBtnClass.push('mu-disabled')
        }
        if(props.circle){
            tempBtnClass.push('mu-circle')
        }
        setBtnClass([...btnClass,...tempBtnClass])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props])
    function emitClickEvent(e:MouseEvent,args){
        // console.log
        props.onClick(e)
    }
    return (
        <button type="button" onClick={emitClickEvent} className={btnClass.join(' ')} disabled={props.disabled}>
            {/* <i className="lake-loading"></i>
            <slot className="icon"></slot> */}

            {
                props.children
            }
        </button >
    )
}

export default MUButton