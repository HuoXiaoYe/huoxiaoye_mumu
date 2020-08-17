import React from 'react'
import demoStyle from "./demo.module.less"


type IDemo = {
    [key: string]: any;
}

const DemoDecorator = (content: string) => (WrappedComponent: React.FC<IDemo>) => {
    function handleClick() {
        console.log("hello world")
    }
    return (props: any) => {
        console.log("DemoDecorator",props)
        return (
            <div>
                <WrappedComponent name="团结" onClick={handleClick} />
                <div>Pleasr show yuor content "{content}"</div>
            </div>
        )
    }
}
const Demo: React.FC<IDemo> = (props) => {
    return (
        <div className={demoStyle["demo-container"]}>
            hello demo === {props.name}
        </div>
    )
}


const DemoD = DemoDecorator("hello 团结")(Demo)



const DemoWrap: React.FC<IDemo> = props => {
    return (
        <div>
            <DemoD msg="Demo wrap传进去的props" />
        </div>
    )
}



export default DemoWrap;
// export default Demo

