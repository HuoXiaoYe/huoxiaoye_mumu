import React from 'react'

const CircleLoading: React.FC<{ color?: string; }> = props => {
    return (
        <div className="circle-loading" style={{ borderTopColor: props.color }}>
        </div>
    )
}
CircleLoading.defaultProps = {
    color:"#409eff"
}

export default CircleLoading