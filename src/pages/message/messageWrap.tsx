import React from 'react';
import Button from "@/ui/components/button/button"
import notification from "@/ui/components/message/message"
import Notification from 'rc-notification';




const MessageWrap: React.FC<any> = props => {
    function handleClick1() {
        notification.pop({ type: 'success', message: "hello world", description: "hello description", top: "1000px" })
    }
    function handleClick2() {
        notification.pop({ type: 'success', message: "hello worldcccc", description: "hello description", top: "1000px" })
    }
    function handleClick3() {
        notification.pop({ type: 'success', message: "hello worldcccc", description: "hello description", top: "1000px" })
    }
    function handleClick4() {
        Notification.newInstance({}, notification => {
            notification.notice({
                content: 'content'
            });
        });
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

