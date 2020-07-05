import React, { useState } from "react"
import "./index.less"
import MUButton from "../../components/button/button"
import Title from "../components/title/title"
import { ButtonType } from "@/tsconfig/MUButton"


interface Ibutton {
    type: ButtonType,
    value: string
}




const BUTTONDESC: string[] = ['基础用法', '禁用按钮', '小型按钮', '圆角按钮', '图标按钮'];
const iconArr 
const getNode: (item: Ibutton, n: number) => React.ReactNode = (item, n) => {
    switch (n) {
        case 0:
            return <li key={item.type}><MUButton type={item.type}>{item.value}</MUButton></li>;
        case 1:
            return <li key={item.type}><MUButton type={item.type} disabled={true}>{item.value}</MUButton></li>
        case 2:
            return <li key={item.type}><MUButton type={item.type} size="small">{item.value}</MUButton></li>;
        case 3:
            return <li key={item.type}><MUButton circle={true} type={item.type}>{item.value}</MUButton></li>;
        case 4:
            return <li key={item.type}><MUButton circle={true} type={item.type} icon="edit"></MUButton></li>
    }

}

function ButtonWrap() {
    const [buttonList] = useState<Ibutton[]>([
        {
            type: "warning",
            value: "警告按钮"
        },
        {
            type: "success",
            value: "成功按钮"
        },
        {
            type: "info",
            value: "信息按钮"
        },
        {
            type: "danger",
            value: "危险按钮"
        }
    ])
    function handleClick(q?: number, w?: number, e?: number) {
        console.log('q', q)
        console.log('w', w)
        console.log('e', e)
    }
    return (
        <div className="button-wrap">
            <Title type="first">MU-BUTTON</Title>
            <div className="button-item">
                <Title type="second">基础用法</Title>

                {
                    BUTTONDESC.map((item, index) => {
                        return <ul key={index}>
                            <li><MUButton>{item}</MUButton></li>
                            {
                                buttonList.map((inneritem) => {
                                    return (
                                        getNode(inneritem, index)
                                    )
                                })
                            }
                        </ul>
                    })
                }
            </div>
            <div>

                <p><i className="iconfont icon-edit"></i></p>
            </div>
        </div>
    )
}

export default ButtonWrap