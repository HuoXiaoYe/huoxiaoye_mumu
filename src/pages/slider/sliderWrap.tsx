import React from 'react'
import Slider from "@/ui/components/slider/slider"
import "./style.less"


const SliderWrap:React.FC = () => {
    return (
        <div className="slider-wrap" style={{margin:"50px"}}>
            <Slider bgColor="primary"/>
            {/* <Slider/> */}
        </div>
    )
}

export default SliderWrap
