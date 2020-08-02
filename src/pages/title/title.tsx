import React from 'react'
// import titleStyle from './style.less'
import './style.less'
interface TitleProps {
    title: string;
    subTitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className="title-wrap"></div>
    )
}

export default Title