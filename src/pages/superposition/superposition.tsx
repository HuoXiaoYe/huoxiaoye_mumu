import React, { useState, useEffect } from 'react'
import Button from "@/ui/components/button/button"
import "./style.less"

interface SuperpositionProps {
    children?:React.ReactNode
}

const Superposition: React.FC<SuperpositionProps> = props => {
    const [showSecondPage, setShowSecondPage] = useState<boolean>(false)
    // let newChild:React.ReactNode[] = [] 
    useEffect(()=>{
        React.Children.forEach(props.children,(item:React.ReactNode)=>{
            // item.
        })
    },[props.children])
    function handleShowSecondPage(): void {
        setShowSecondPage(!showSecondPage)
    }
    return (
        <div className="superposition-wrap">
            <div className={['first-page', showSecondPage ? 'first-page-scale' : ''].join(" ")} >
                <Button size="large" className="mu-open-button" onClick={handleShowSecondPage} type="success" >打开折叠页面</Button>
                <p>
                折叠面板能有效地节省页面的可视面积，非常适合应用于：QA说明、帮助文档等
                </p>
            </div>
            <div className={['second-page', showSecondPage ? 'second-page-show' : ''].join(" ")}>
                <Button size="large" className="mu-close-button" onClick={handleShowSecondPage} type="success" >关闭折叠页面</Button>
                
            </div>
        </div>
    )
}

export default Superposition
