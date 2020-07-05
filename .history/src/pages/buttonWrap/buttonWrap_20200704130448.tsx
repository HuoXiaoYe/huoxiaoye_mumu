import React from "react"
import "./index.less"
import MUButton from "../../components/button/button"
import Title form "../title/title"

function ButtonWrap(){
    return (
        <div className="button-wrap">
            <h1 className="mu-title">欢迎来到MU-button</h1>
            <MUButton /> 
        </div>
    )
}

export default ButtonWrap