/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react"

type titleType = 'first' | 'second'

interface IProps {
    type : titleType
}

function Title(props:IProps){
    const [,setClassName ]= useState<titleType>('first');
    useEffect(()=>{
        setClassName(props.type)
    })

    return (
        <div className="title-wrap">
            {
                props.type === 'first' ? <div className="firse-level">
            }
        </div>
    )
}

export default Title