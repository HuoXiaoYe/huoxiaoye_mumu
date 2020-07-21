import React from 'react'
import Loading from "@/ui/components/loading/loading"
import "./style.less"

const LoadingWrap: React.FC<{}> = () => {
    return (
        <div className="loading-wrap">
            <div>不同size</div>
            <div className="loading-item">
                <Loading size="large" contentAlign="horizontal" type="line" className="my-line-loading" />
                <Loading size="normal" contentAlign="vertial" type="line" className="my-line-loading" />
                <Loading size="small" content="再催熄火" type="line" className="my-line-loading" />
            </div>
            <div>不同size</div>
            <div className="loading-item">
                <Loading size="large" type="mum" className="my-line-loading" />
                <Loading size="normal" type="mum" className="my-line-loading" />
                <Loading size="small" content="" type="mum" className="my-line-loading" />
            </div>
            <div>自定义颜色</div>
            <div className="loading-item">
                <Loading type="line" color="#5cb87a" className="my-line-loading" />
                <Loading type="line" color="#F56C6C" className="my-line-loading" />
                <Loading type="line" color="#909399" className="my-line-loading" />
            </div>
            <div>不同type</div>
            <div className="loading-item">
                <Loading type="line" className="my-line-loading" />
                <Loading type="circle" color="#F56C6C" className="my-line-loading" />
                <Loading type="mum" className="my-line-loading" />
            </div>
        </div>
    )
}

export default LoadingWrap