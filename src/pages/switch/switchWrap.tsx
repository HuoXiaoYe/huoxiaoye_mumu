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
                <span>不同尺寸Switch</span>
                <Switch checked={false} size="big" onChange={handleChang1}/>
                <Switch checked={false} size="normal" onChange={()=>{}}/>
                <Switch checked={false} size="small" onChange={()=>{}}/>
            </div>
        </div>
    )
}


export default SwitchWrap
