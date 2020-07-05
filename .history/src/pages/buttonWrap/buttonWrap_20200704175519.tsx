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
    function handleClick(e:any){
        console.log(e)
    }    
    return (
        <div className="button-wrap">
            <Title type="first">MU-BUTTON</Title>
            <div className="button-item">
                <Title type="second">基础用法</Title>
                <ul>
                    <li><MUButton>默认按钮</MUButton></li>
                    {
                        buttonList.map((item)=>{
                            return (
                            <li key={item.type}><MUButton type={item.type}>{item.value}</MUButton></li>
                            )
                        })
                    }
                </ul>
                <ul>
                <li><MUButton disabled={true}>禁用按钮</MUButton></li>
                    {
                        buttonList.map((item)=>{
                            return (
                            <li key={item.type}><MUButton type={item.type} disabled={true}>{item.value}</MUButton></li>
                            )
                        })
                    }
                </ul>

                <ul>
                    <li><MUButton size="small">小型按钮</MUButton></li>
                    {
                        buttonList.map((item)=>{
                            return (
                                <li key={item.type}><MUButton type={item.type} size="small">{item.value}</MUButton></li>
                            )
                        })
                    }
                </ul>


                <ul>
                    <li onClick={handleClick}><MUButton circle={true} >圆角按钮</MUButton></li>
                    <li><MUButton circle={true} type="warning">警告按钮</MUButton></li>
                    <li><MUButton circle={true} type="success">成功按钮</MUButton></li>
                    <li><MUButton circle={true} type="info">信息按钮</MUButton></li>
                    <li><MUButton circle={true} type="danger">危险按钮</MUButton></li>
                </ul>
            </div>

        </div>
    )
}

export default ButtonWrap