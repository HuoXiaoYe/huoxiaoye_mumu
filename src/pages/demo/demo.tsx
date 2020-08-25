import React from 'react'
import { treeData, ITreeNode } from "./treeMapData"
import DemoStyle from "./demo.module.less"


interface ITreeMap {
    list: ITreeNode[];
    level: number;
}

const TreeMap: React.FC<ITreeMap> = (props) => {
    // props.
    return (
        <div>

            <div className={DemoStyle[`tree-${props.level}`.toString()]}>
                {
                    props.list.map((item, index) => {
                        return <div key={index + Math.random()}>
                            {item.name}==={props.level.toString()}
                    </div>
                    })
                }
            </div>
            {
                props.list[0]._child ? <TreeMap level={props.level + 1} list={props.list[0]._child} /> : ''
            }
        </div>
    )
}


const TreeWrap: React.FC = () => {
    return (
        <div>
            <TreeMap level={1} list={treeData} />
        </div>
    )
}

export default TreeWrap
