/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react"
import "./index.less"

type titleType = 'first' | 'second'

interface IProps {
    type : titleType,
    children?:any
}

function Title(props:IProps){
    const [,setClassName ]= useState<titleType>('first');
    useEffect(()=>{
        setClassName(props.type)
    })

    return (
        <div className="title-wrap">
            {
                props.type === 'first' ? 
                <div className="firse-level">
                    欢迎来到
                    {
                        props.children
                    }
                </div>:
                <div className="second-level">
                    {
                        props.children
                    }
                </div>
            }
        </div>
    )
}

export default Title