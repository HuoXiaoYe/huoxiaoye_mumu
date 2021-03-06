import React, { useEffect,useState } from 'react'
import { IProps } from "@/tsconfig/MUButton"
import "./index.less"


type eventType = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>


function MUButton(props: IProps) {
    const [btnClass,setBtnClass] = useState<string[]>(['mu-button'])
    useEffect(() => {
        let tempBtnClass:string[] = []
        if(props.type){
            tempBtnClass.push('mu-' + props.type)
        }else{
            tempBtnClass.push('mu-primary')
        }
        if(props.size){
            tempBtnClass.push('mu-' + props.size)
        }else{
            tempBtnClass.push('mu-normal')
        }
        if(props.disabled){
            tempBtnClass.push('mu-disabled')
        }
        if(props.circle){
            tempBtnClass.push('mu-circle')
        }
        setBtnClass([...btnClass,...tempBtnClass])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props])
    const handleClick = (e: eventType) => {
        const { onClick } = props;
        if (props.disabled) {
          return;
        }
        if (onClick) {
          (onClick as eventType)(e);
        }
      };
    return (
        <button type="button" onClick={handleClick} className={btnClass.join(' ')} disabled={props.disabled}>
            {/* <i className="lake-loading"></i>
            <slot className="icon"></slot> */}

            {
                props.children
            }
        </button >
    )
}

export default MUButton