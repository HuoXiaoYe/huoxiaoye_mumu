import Button from "@/ui/components/button/button"
import React from "react";
import {ButtonType,ButtonSize} from "@/ui/components/button/button";

const buttonList:{type:ButtonType, value:string}[] = [
    {
        type:"primary",
        value:"普通按钮"
    },
    {
        type:"success",
        value:"成功按钮"
    },
    {
        type:"info",
        value:"信息按钮"
    },
    {
        type:"warning",
        value:"警告按钮"
    },
    {
        type:"danger",
        value:"危险按钮"
    }
] 




const ButtonWrap:React.FC = (props)=>{
    return (
        <div className="button-wrap">
            <div className="button-list">
                <div className="title">
                    普通按钮
                </div>
                <ul>
                {
                    buttonList
                }

                </ul>
            </div>
           
        </div>
    )
}

export default ButtonWrap;
