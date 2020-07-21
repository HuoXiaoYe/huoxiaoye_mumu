import React, { useEffect, useRef } from 'react'
import "./style.less"
import Loading from "@/ui/components/loading/loading"

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
        // console.log(container.current)
        container.current.addEventListener("scroll", executeLoadMore)
        return ()=>{
            container.current.removeEventListener("scroll", executeLoadMore)
        }
    },)

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
                <div style={{padding:"10px",textAlign:"center"}}>
                    {
                        props.isEnd ? "亲，我也是有底线的哦" : <Loading type="line" size="small" content="正在💪加载中..."/>
                    }
                </div>
        </div>
    )
}

export default UpRefresh