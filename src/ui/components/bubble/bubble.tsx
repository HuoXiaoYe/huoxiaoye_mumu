import React, { useState } from 'react'
import { generateClassName } from "@/ui/utils/utils"
import "./style.less"

export interface BubbleProps {
    position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    children: React.ReactNode;
    icon?: string;
    className?:string
}

const Bubble: React.FC<BubbleProps> = (props) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const {position,className} = props;
    const classNames = generateClassName('mu',{
        [`${position}`]:!!position
    },className)
    function toggleShowDetail() {
        setShowDetail(!showDetail)
    }
    return (
        <div className={"mu-bubble " + classNames} style={{width:showDetail? "120px":"20px",height:showDetail? "200px":"20px",overflow:'hidden'}} onClick={toggleShowDetail} >
            <i className={['iconfont', `icon-${'star'}`].join(" ")} 
            style={{display:showDetail? "none":"block",}} onClick={toggleShowDetail}></i>
            <div className="mu-main" style={{display:!showDetail? "none":"block",}}>
                {props.children}
            </div>
        </div>
    )
}
Bubble.defaultProps = {
    position: 'bottomRight'
}

export default Bubble