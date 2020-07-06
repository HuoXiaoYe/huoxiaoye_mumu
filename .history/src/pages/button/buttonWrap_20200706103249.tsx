import Button from "@/ui/components/button/button"
import React from "react";
import {ButtonType,ButtonSize} from "@/ui/components/button/button";

const buttonList:{type:ButtonType, value:string}[] = [
    {
        
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
