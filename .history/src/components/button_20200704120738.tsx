import React,{useEffect} from 'react'
import {IProps} from "../tsconfig/MUButton"
import "./button.less"


function MUButton(props:IProps){
    useEffect(()=>{
        console.log("initial")
    })
    return (
        <div className="mu-button">

        </div>
    )
}

export default MUButton