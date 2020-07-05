import React,{useEffect} from 'react'
import {IProps} from "@src/tsconfig/MUButton"
import "./index.less"


function MUButton(props:IProps){
    useEffect(()=>{
        console.log("initional")
    })
    return (
        <div className="mu-button">
            mumuButton
        </div>
    )
}

export default MUButton