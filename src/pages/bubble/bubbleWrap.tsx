import React from 'react'
import Bubble from "@/ui/components/bubble/bubble"

const BubbleWrap:React.FC = ()=>{
    return (
        <div className="bubble-wrap">
            <Bubble>
                <div>签到</div>
                <div>加微信</div>
                <div>加QQ</div>
                <div>打卡</div>
                <div>滑水</div>
            </Bubble>
        </div>
    )
}

export default BubbleWrap
