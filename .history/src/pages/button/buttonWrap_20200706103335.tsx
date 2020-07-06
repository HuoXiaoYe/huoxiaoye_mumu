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
        value:"普通按钮"
    },
    {
        type:"primary",
        value:"普通按钮"
    },
    {
        type:"primary",
        value:"普通按钮"
    }
] 




const ButtonWrap:React.FC = (props)=>{
    return (
        <div className="button-wrap">
            <Button>
                mu button
            </Button>
        </div>
    )
}

export default ButtonWrap;
