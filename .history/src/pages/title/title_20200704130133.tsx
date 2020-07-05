import React, {useState,useEffect} from "react"

type type = 'first' | 'second'

interface IProps {
    type : type
}

function Title(props:Iprops){
    const calssname = useState<>("first");

    return (
        <div className="mu-title-wrap">

        </div>
    )
}

export default Title