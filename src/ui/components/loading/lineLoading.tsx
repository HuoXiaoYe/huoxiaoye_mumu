import React from 'react'
import "./style.less"
const LineLoading: React.FC<{ color?: string }> = props => {
    return (
        <div className="line-loading">
            <div className="line" style={{ backgroundColor: props.color }}></div>
            <div className="line" style={{ backgroundColor: props.color }}></div>
            <div className="line" style={{ backgroundColor: props.color }}></div>
        </div>
    )
}

LineLoading.defaultProps = {
    color: '#409eff'
}

export default LineLoading