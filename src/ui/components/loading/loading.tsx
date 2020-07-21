import React from 'react'
import { generateClassName } from "@/ui/utils/utils"
import LineLoading from "./lineLoading"
import MumLoading from "./mumLoading"
import CircleLoading from "./circleLoading"
import "./style.less"


type loadingSize = 'large' | 'normal' | 'small';
type loadingType = 'line' | 'mum' | 'circle'
interface loadingProps {
    size: loadingSize;
    color: string;
    type: loadingType,
    className: string,
    content?:string,
    contentAlign?: 'vertial' | 'horizontal'
}

const Loading: React.FC<Partial<loadingProps>> = (props) => {
    let { size, color, type, className,content, contentAlign} = props;
    const classNames = generateClassName('mu', {
        [`${type}`]: !!type,
        [`${size}`]: !!size,
        [`${contentAlign}`]: !!contentAlign,
    }, className)
    function getLoadingEl(type: loadingType | undefined): React.ReactNode {
        switch (type) {
            case 'line':
                return <LineLoading color={color} />
            case 'circle':
                return <CircleLoading color={color}/>
            case 'mum':
                return <MumLoading color={color}/>
        }
    }
    return (
        <div className={classNames + " mu-loading"}>
            {getLoadingEl(type)}
            <p>{content}</p>
        </div>
    )
}

Loading.defaultProps = {
    size: 'normal',
    type: 'line',
    content:"加载中",
    contentAlign:'vertial'
}

export default Loading