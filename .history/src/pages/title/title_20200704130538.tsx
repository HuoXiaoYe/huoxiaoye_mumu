/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react"

type titleType = 'first' | 'second'

interface IProps {
    type : titleType
}

function Title(props:IProps){
    const [calssname,setClassName ]= useState<titleType>('first');
    useEffect(()=>{
        setClassName(props.type)
    })

    return (
        <div className={calssname}>
            hello
        </div>
    )
}

export default Title