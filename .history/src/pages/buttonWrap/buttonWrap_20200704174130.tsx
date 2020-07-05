import React,{useState} from "react"
import "./index.less"
import MUButton from "../../components/button/button"
import Title from "../components/title/title"
import {ButtonType} from "@/tsconfig/MUButton"


interface Ibutton {
    type:ButtonType,
    value:string
}

function ButtonWrap() {
    const [buttonList] = useState<Ibutton[]>([
        {
            type:"warning",
            value:"警告按钮"
        },
        {
            type:"success",
            value:"成功按钮"
        },
        {
            type:"info",
            value:"信息按钮"
        },
        {
            type:"danger",
            value:"危险按钮"
        }
    ])
    return (
        <div className="button-wrap">
            <Title type="first">MU-BUTTON</Title>
            <div className="button-item">
                <Title type="second">基础用法</Title>
                <ul>
                    {
                        buttonList.map((item)=>{
                            return (
                            <li><MUButton type={item.type}>{item.value}</MUButton></li>
                            )
                        })
                    }
                </ul>
                <ul>
                    <li><MUButton disabled={true}>禁用按钮</MUButton></li>
                    <li><MUButton disabled={true} type="warning">警告按钮</MUButton></li>
                    <li><MUButton disabled={true} type="success">成功按钮</MUButton></li>
                    <li><MUButton disabled={true} type="info">信息按钮</MUButton></li>
                    <li><MUButton disabled={true} type="danger">危险按钮</MUButton></li>
                </ul>

                <ul>
                    <li><MUButton size="small">小型按钮</MUButton></li>
                    <li><MUButton size="small" type="warning">警告按钮</MUButton></li>
                    <li><MUButton size="small" type="success">成功按钮</MUButton></li>
                    <li><MUButton size="small" type="info">信息按钮</MUButton></li>
                    <li><MUButton size="small" type="danger">危险按钮</MUButton></li>
                </ul>


                <ul>
                    <li><MUButton size="small" circle={true}>圆角按钮</MUButton></li>
                    <li><MUButton size="small" circle={true} type="warning">警告按钮</MUButton></li>
                    <li><MUButton size="small" circle={true} type="success">成功按钮</MUButton></li>
                    <li><MUButton size="small" circle={true} type="info">信息按钮</MUButton></li>
                    <li><MUButton size="small" circle={true} type="danger">危险按钮</MUButton></li>
                </ul>
            </div>

        </div>
    )
}

export default ButtonWrap