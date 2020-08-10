import React from 'react'
import titleStyle from './style.module.less'
interface TitleProps {
    title: string;
    subTitle: string;
    desc?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle, desc }) => {
    return (
        <div className={titleStyle["title-wrap"]}>
            <div className={titleStyle["title"]}>{title}</div>
            <div className={titleStyle["sub-title"]}>{subTitle}</div>
            {
                desc ? <div className={titleStyle["desc"]}>{desc}</div> : ''
            }
        </div>
    )
}

export default Title