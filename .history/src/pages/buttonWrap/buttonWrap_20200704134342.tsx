import React from "react"
import "./index.less"
import MUButton from "../../components/button/button"
import Title from "../components/title/title"

function ButtonWrap(){
    return (
        <div className="button-wrap">
            <Title type="first">MU-BUTTON</Title>
            <MUButton>默认按钮</MUButton>
            <MUButton type="warning" size="small">警告按钮</MUButton>
        </div>
    )
}

export default ButtonWrap