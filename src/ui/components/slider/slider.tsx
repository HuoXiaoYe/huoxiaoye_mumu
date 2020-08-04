import React, { useEffect, useRef, useState } from 'react'
import "./style.less"
import { generateClassName } from "@/ui/utils/utils"
import { MuMuColorType } from "@/ui/utils/type"
import Button from "@/ui/components/button/button"
// import { RemoveReadonly } from "@/ui/utils/utilityTypes"
// import useDebounce from "@/ui/utils/useDebounce"
interface baseSliderProps {
    defaultValue: number;
    maxValue: number;
    minValue: number;
    children: React.ReactChild;
    bgColor: MuMuColorType;
    className: string;
}
export type SliderProps = Partial<baseSliderProps>;
const Slider: React.FC<SliderProps> = props => {
    const { className, bgColor, defaultValue = 0, maxValue = 100, minValue = 0 } = props;
    let classes = generateClassName("mu", {
        "slider": true,
        [`${bgColor}`]: !!bgColor,
    }, className)
    let handleEl = useRef<HTMLDivElement>(null!)
    let handleWrap = useRef<HTMLDivElement>(null!)
    let [left, setLeft] = useState<number>(defaultValue / (maxValue - minValue));
    let [sliderWidth, setSliderWidth] = useState<number>(275)
    // let [wrapRect, setWrapRect] = useState<RemoveReadonly<DOMRect>>(null!)
    // eslint-disable-next-line
    useEffect(() => {
        // 初始化监听事件
        handleEl.current.addEventListener("touchstart", touchStartHandle);
        handleWrap.current.addEventListener("touchmove", touchMoveHandle);
        handleEl.current.addEventListener("touchend", touchEndHandle);
        setSliderWidth(275)
        var tempEl1 = handleEl.current
        var tempEl2 = handleWrap.current
        console.log("handleWrap.current.getBoundingClientRect()", handleWrap.current.getBoundingClientRect())
        console.log("handleWrap.current.getBoundingClientRect()", handleWrap.current.getBoundingClientRect())
        return () => {
            tempEl1.removeEventListener("touchstart", touchStartHandle);
            tempEl2.removeEventListener("touchmove", touchMoveHandle);
            tempEl1.removeEventListener("touchend", touchEndHandle);
        }
    })
    function touchStartHandle(e: TouchEvent) {
        console.log("sliderWidth", sliderWidth)
    }

    function touchMoveHandle(e: TouchEvent) {
        let left = e.changedTouches[0].pageX - handleWrap.current.getBoundingClientRect().x;
        if (left <= 0) return setLeft(0)
        if (left >= sliderWidth) return setLeft(1)
        console.log("left", left)
        console.log("sliderWidth", sliderWidth)
        setLeft((left) / sliderWidth)
    }
    function touchEndHandle(e: TouchEvent) {
        console.log("touchEndHandle")
    }
    return (
        <div className={classes} ref={handleWrap}>
            <div className="mu-slider-rail"></div>
            <div className="mu-slider-track" style={{ width: left * 100 + '%' }}></div>
            <div className="mu-slider-handle" ref={handleEl} style={{ left: left * 100 + '%' }}>
            </div>
            {/* <p>{left}</p> */}
            <Button>{sliderWidth}</Button>
        </div>
    )
};
Slider.defaultProps = {
    defaultValue: 0,
    minValue: 0,
    maxValue: 100,
    bgColor: 'primary'
}



export default Slider