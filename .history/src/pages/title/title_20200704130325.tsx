import React, {useState,useEffect} from "react"

type titleType = 'first' | 'second'

interface IProps {
    type : titleType
}

function Title(props:Iprops){
    const [calssname,setClassName ]= useState<titleType>('first');
    useEffect(()=>{
        setClassName(props.type)
    })

    return (
        <div className="mu-title-wrap">

        </div>
    )
}

export default Title