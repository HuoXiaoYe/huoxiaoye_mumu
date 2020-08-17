import React, { useRef, useEffect, useContext } from 'react'
import { generateClassName } from "@/ui/utils/utils"
import { TabContext } from "./tab"
export interface TabItemProps {
    className?: string;
    content: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    title: string;
    index?: number
}

const TabItem: React.FC<TabItemProps> = props => {
    const { className } = props;
    // const [startX, setStartX] = useState<number>(0);
    const tabItemWrapEl = useRef<HTMLDivElement>(null!);
    const classes = generateClassName("mu", {
        'tab-item': true,
    }, className)
    const { dispatch: tabDispatch } = useContext(TabContext);
    useEffect(() => {
        tabItemWrapEl.current.addEventListener("touchstart", handleOnTouchStart);
        tabItemWrapEl.current.addEventListener("touchmove", handleOnTouchMove);
        tabItemWrapEl.current.addEventListener("touchend", handleOnTouchEnd);
        return () => {
            tabItemWrapEl.current.removeEventListener("touchstart", handleOnTouchStart)
            tabItemWrapEl.current.removeEventListener("touchmove", handleOnTouchMove)
            tabItemWrapEl.current.removeEventListener("touchend", handleOnTouchEnd)
        }
    })
    function handleOnTouchStart(e: TouchEvent): void {
        tabDispatch({ type: 'changeStartClientX', value: e.changedTouches[0].clientX })
        tabDispatch({ type: "changTimeStamp", value: Date.now() })
    }
    function handleOnTouchMove(e: TouchEvent): void {
        tabDispatch({ type: 'changeCurrentClientX', value: e.changedTouches[0].clientX })
    }
    function handleOnTouchEnd(e: TouchEvent): void {
        tabDispatch({ type: 'changeEndClientX', value: e.changedTouches[0].clientX })
    }
    return (
        <div className={classes} ref={tabItemWrapEl} style={{ height: '500px'}}>
            hello teb item=={props.content}
        </div>
    )
}

export default TabItem

