import React, { useState, useRef, useEffect } from 'react'
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
    className?: string
}

const Bubble: React.FC<BubbleProps> = (props) => {
    const { position, className } = props;
    const [isFold, setFold] = useState<boolean>(true);
    const [mainWidth, setMainWidth] = useState<number>();
    const [mainHeight, setMainHeight] = useState<number>();
    const classNames = generateClassName('mu', {
        [`${position}`]: !!position
    }, className)
    const mainEl = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        setMainWidth(mainEl.current.offsetWidth);
        setMainHeight(mainEl.current.offsetHeight);
    }, [])
    function handleToggleFold(): void {
        setFold(!isFold)
    }
    return (
        <div className={"mu-bubble-wrap " + classNames} style={{ width: isFold ? '36px' : mainWidth + 'px', height: isFold ? '36px' : mainHeight + 'px', borderRadius : isFold ? '18px' : '10px' }}>
            <div className="mu-bubble-main" ref={mainEl}>
                <div className="mu-main">
                    {props.children}
                </div>
                <i onClick={handleToggleFold}  className={['iconfont', `icon-${'close'}`, isFold ? '' : 'no-fold'].join(" ")} style={{ width: isFold ? '36px' : mainWidth + 'px'}}></i>
            </div>
        </div>
    )
}
Bubble.defaultProps = {
    position: 'bottomRight'
}

export default Bubble