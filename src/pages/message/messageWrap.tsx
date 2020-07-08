import React from 'react';
import Button from "@/ui/components/button/button"
import message from "@/ui/components/message/message.tsx"

const MessageWrap: React.FC<any> = props => {
    function handleClick1() {
        message.open({ type: "primary", message: "hello world" })
    }
    function handleClick2() {
        message.open({ type: "success", message: "hello worldcccc" })
    }
    function handleClick3() {
        message.open({ type: 'info', message: "hello worldcccc" })
    }
    function handleClick4() {
        message.open({ type: 'warning', message: "hello worldcccc" })
    }
    return (
        <div>
            <Button type="primary" size="small" onClick={handleClick1}>
                message1
            </Button>
            <Button type="primary" size="small" onClick={handleClick2}>
                message2
            </Button>
            <Button type="primary" size="small" onClick={handleClick3}>
                message3
            </Button>
            <Button type="primary" size="small" onClick={handleClick4}>
                message4
            </Button>
        </div>
    )
}

export default MessageWrap

