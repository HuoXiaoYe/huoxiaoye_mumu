import React from 'react';
import Button from "@/ui/components/button/button"
import message from "@/ui/components/message/message.tsx"
import "./style.less"

const MessageWrap: React.FC<any> = props => {
    function handleClick1() {
        message.open({message: "这是一条默认提示" })
    }
    function handleClick2() {
        message.open({ type: "success", message: "这是一条成功提示" })
    }
    function handleClick3() {
        message.open({ type: 'info', message: "这是一条信息提示" })
    }
    function handleClick4() {
        message.open({ type: 'warning', message: "这是一条警告提示" })
    }
    function handleClick5() {
        message.open({ type: "danger", message: "这是一条危险提示" })
    }
    function handleClick6() {
        message.open({ type: "success", message: "恭喜您成功删除了", icon:"delete" })
    }
    return (
        <div className="message-wrap">
            <Button className="message-button" type="primary" size="small" onClick={handleClick1}>
                默认提示
            </Button>
            <Button className="message-button" type="info" size="small" onClick={handleClick2}>
                信息提示
            </Button>
            <Button className="message-button" type="success" size="small" onClick={handleClick3}>
                成功提示
            </Button>
            <Button className="message-button" type="warning" size="small" onClick={handleClick4}>
                警告提示
            </Button>
            <Button className="message-button" type="danger" size="small" onClick={handleClick5}>
                危险提示
            </Button>
            <Button className="message-button" type="success" size="small" onClick={handleClick6}>
                自定义图标
            </Button>
        </div>
    )
}

export default MessageWrap

