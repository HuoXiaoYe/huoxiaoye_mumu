import React, { useEffect, useRef } from 'react'
import "./style.less"

interface UpRefershProps {
    isEnd: boolean;
    loadMore: () => void;
    children: React.ReactNode
}

// let node:HTMLElement = document.getElementById("box");
// node.scrollTop



const UpRefresh: React.FC<UpRefershProps> = props => {
    console.log(props)
    const container = useRef<HTMLDivElement>(null!)
    // let _container:HTMLDivElement = container.current;
    useEffect(() => {
        container.current.addEventListener("scroll", executeLoadMore)
        return ()=>{
            container.current.removeEventListener("scroll", executeLoadMore)
        }
    })

    function executeLoadMore(): void {
        console.log(getScrollTop() + getClientHeight() + 20)
        console.log(container.current.scrollHeight)
        if (!props.isEnd && getScrollTop() + getClientHeight() + 20 > (container.current.scrollHeight)) {
            props.loadMore()
        }
    }
    function getClientHeight() {
        return container.current.offsetHeight
    }
    function getScrollTop() {
        return container.current.scrollTop || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    return (
        <div className="up-refresh-container" style={{width:"100%",height:"100%"}} ref={container}>
            {
                props.children
            }
                <div style={{lineHeight:'40px',textAlign:"center"}}>
                    {
                        props.isEnd ? "没有更多了" : "正在努力加载中" 
                    }
                </div>
        </div>
    )
}

export default UpRefresh