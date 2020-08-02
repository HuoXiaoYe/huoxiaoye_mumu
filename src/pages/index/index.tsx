import React, { useState, useRef } from 'react'
import "./index.less"
import Home1 from "@/pages/homePage/home1"
import Home2 from "@/pages/homePage/home2"
const Index: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const containerEl = useRef<HTMLDivElement>(null!)
    function toggleActiveIndex(index: number): void {
        setActiveIndex(index);
        if (index === 0) {
            containerEl.current.style.transform = `translateX(0)`
        } else {
            containerEl.current.style.transform = `translateX(-${index}00%)`
        }
    }

    return (
        <div className="index-container">
            <div className="app-main-wrap">
                <div className="app-main" ref={containerEl}>
                    <div className="page">
                        <Home1 />
                    </div>
                    <div className="page">
                        <Home2 />
                    </div>
                </div>
            </div>
            <ul className="app-bottom-nav">
                <li onClick={toggleActiveIndex.bind(null, 0)} className={[activeIndex === 0 ? 'active' : ''].join(" ")}>
                    <i className='iconfont'>&#xe9db;</i>
                    <p>mumu</p>
                </li>
                <li onClick={toggleActiveIndex.bind(null, 1)} className={[activeIndex === 1 ? 'active' : ''].join(" ")}>
                    <i className='iconfont'>&#xe608;</i>
                    <p>mumu</p>
                </li>
            </ul>
        </div>
    )
}

export default Index
