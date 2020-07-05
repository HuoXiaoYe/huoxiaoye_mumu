import React from "react"
import "./index.less"
import MUButton from "../../components/button/button"
import Title from "../components/title/title"

function ButtonWrap() {
    return (
        <div className="button-wrap">
            <Title type="first">MU-BUTTON</Title>
            <div className="button-item">
                <Title type="second">基础用法</Title>
                <ul>
                    <li><MUButton>默认按钮</MUButton></li>
                    <li><MUButton type="warning">警告按钮</MUButton></li>
                    <li><MUButton type="success">成功按钮</MUButton></li>
                    <li><MUButton type="info">信息按钮</MUButton></li>
                    <li><MUButton type="danger">危险按钮</MUButton></li>
                </ul>
                <ul>
                    <li><MUButton disabled={true}>禁用按钮</MUButton></li>
                    <li><MUButton disabled={true} type="warning">警告按钮</MUButton></li>
                    <li><MUButton disabled={true} type="success">成功按钮</MUButton></li>
                    <li><MUButton disabled={true} type="info">信息按钮</MUButton></li>
                    <li><MUButton disabled={true} type="danger">危险按钮</MUButton></li>
                </ul>
            </div>

        </div>
    )
}

export default ButtonWrap