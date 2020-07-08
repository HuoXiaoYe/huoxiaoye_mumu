import Button from "@/ui/components/button/button"
import "./style.less"
import React from "react";
import { ButtonType } from "@/ui/components/button/button";

interface IButton {
    type: ButtonType, value: string
}

const buttonList: IButton[] = [
    {
        type: 'default',
        value: '默认按钮'
    },
    {
        type: "primary",
        value: "主要按钮"
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
        type: "warning",
        value: "警告按钮"
    },
    {
        type: "danger",
        value: "危险按钮"
    }
]


const buttonShow: string[] = ['默认按钮', '朴素按钮', '圆角按钮', '禁用状态', 'loading状态']
const iconButton: string[] = ["search", "edit", "check", 'emailFilled', 'star', 'delete']

function getButtonEl(id: number, item: IButton): React.ReactNode {
    switch (id) {
        case 0:
            return <Button size="large" type={item.type}>{item.value}</Button>
        case 1:
            return <Button size="normal" type={item.type} plain='plain'>{item.value}</Button>
        case 2:
            return <Button size="small" type={item.type} circle='circle'>{item.value}</Button>
        case 3:
            return <Button type={item.type} disabled='disabled'>{item.value}</Button>
        case 4:
            return <Button loading="loading" type={item.type} size="small"> loading </Button>

    }
}




const ButtonWrap: React.FC = (props) => {
    // function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    //     console.log(e.clientX)
    // }
    return (
        <div className="button-wrap">
            {
                buttonShow.map((item, index) => {
                    return (
                        <div className="button-list" key={index}>
                            <div className="title">
                                {item}
                            </div>
                            <ul>
                                {
                                    buttonList.map((buttonItem) => {
                                        return <li key={Math.random()}>{getButtonEl(index, buttonItem)}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            <div className="button-list">
                <div className="title">
                    图标按钮
                            </div>
                <ul>{
                    iconButton.map((item, index) => {
                        return (<li key={index}>
                            <Button icon={item} circle="circle" type={buttonList[index].type} size="small"></Button>
                        </li>)
                    })
                }
                </ul>
            </div>
            <div className="button-list">
                <div className="title">文字按钮</div>
                <ul>
                    <li>
                        <Button type={'link'} href="http://www.baidu.com" size="large" target="_black" disabled="disabled">link-large</Button>
                    </li>
                    <li>
                        <Button type={'link'} href="http://www.baidu.com" size="normal" target="_black">link-normal</Button>
                    </li>
                    <li>
                        <Button type={'link'} href="http://www.baidu.com" size="normal" target="_black">link-small</Button>
                    </li>
                </ul>
                </div>
            </div>
    )
}

export default ButtonWrap;
