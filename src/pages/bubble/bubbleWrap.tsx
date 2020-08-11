import React from 'react'
import Bubble from "@/ui/components/bubble/bubble"
import BubbleStyle from "./style.module.less"

const BubbleWrap: React.FC = () => {
    return (
        <div className={BubbleStyle["bubble-wrap"]}>
            <Bubble>
                <div className={BubbleStyle["bubble-main"]}>
                    {
                        new Array(5).fill(0).map((item, i) => <div key={i}>第{i + 1}项</div>)
                    }
                </div>
            </Bubble>
        </div>
    )
}

export default BubbleWrap
