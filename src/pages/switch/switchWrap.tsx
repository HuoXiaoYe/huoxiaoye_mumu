import React from 'react'
import "./style.less"
import Switch from "@/ui/components/switch/switch"

const SwitchWrap: React.FC<any> = () => {
    function handleChang1(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.checked)
    }
    return (
        <div className="switch-wrap">
            <div className="switch-item">
                <span>三种尺寸</span>
                <Switch checked={false} size="big" onChange={handleChang1}/>
                <Switch checked={false} size="normal" onChange={()=>{}}/>
                <Switch checked={false} size="small" onChange={()=>{}}/>
            </div>
            <div className="switch-item">
                <span>不可选中</span>
                <Switch checked={false} disabled="disabled" size="big" onChange={handleChang1}/>
                <Switch checked={true} disabled="disabled" size="normal" onChange={()=>{}}/>
                <Switch checked={false} disabled="disabled" size="small" onChange={()=>{}}/>
            </div>
            <div className="switch-item">
                <span>loading状态</span>
                <Switch checked={false} loading="loading" size="big" onChange={handleChang1}/>
                <Switch checked={true} loading="loading" disabled="disabled" size="normal" onChange={()=>{}}/>
                <Switch checked={false} loading="loading" size="small" onChange={()=>{}}/>
            </div>
        </div>
    )
}


export default SwitchWrap
