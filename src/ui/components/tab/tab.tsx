import React, { useEffect, useState, createContext, useReducer, useRef, useCallback } from 'react'
import { generateClassName } from "@/ui/utils/utils"
import "./tab.style.less"
import { TabItemProps } from "./tabItem"
type TabProps = {
    children: React.ReactNode;
    activeIndex?: number;
    readonly className?: string;
}
type TabAction = {
    type: 'changeStartClientX' | 'changeCurrentClientX' | 'changeEndClientX' | 'changTimeStamp',
    value: number
}
interface ITabContext {
    _activeIndex: number;
    startClientX: number;
    currentClientX: number;
    endClientX: number;
    startTimeStamp: number;
}
const initialState: ITabContext = {
    _activeIndex: 0,
    startClientX: 0,
    currentClientX: 0,
    endClientX: 0,
    startTimeStamp: 0,
}
type TabReducer = React.Reducer<ITabContext, TabAction>
export const TabContext = createContext<{
    state: ITabContext
    dispatch: React.Dispatch<TabAction>
}>(null!)

const Tab: React.FC<TabProps> = props => {
    const [tabCount, setTabCount] = useState<number>(0);
    const { className, children, activeIndex = 0 } = props;
    const [titleList, setTitleList] = useState<string[]>([])
    const [_activeIndex, _setActiveIndex] = useState<number>(activeIndex)
    const mainContainerEl = useRef<HTMLDivElement>(null!)
    const [clientWidth, setClientWidth] = useState<number>(0);
    const classes = generateClassName("mu", {
        "tab": true,
    }, className)

    const Redecer: TabReducer = (state, action) => {
        switch (action.type) {
            case 'changeStartClientX':
                return { ...state, startClientX: action.value };
            case 'changeCurrentClientX': // touchmove
                var distance = action.value - state.startClientX;
                var additionPercent = distance / clientWidth;
                const percent = 0 - Math.ceil((_activeIndex - additionPercent) * 100) + '%';
                mainContainerEl.current.style.transform = `translateX(${percent})`;
                return { ...state, currentClientX: action.value };
            case 'changeEndClientX':
                var distance = action.value - state.startClientX;
                var additionPercent = distance / clientWidth; // 左正右负
                if (additionPercent >= 0.3 && _activeIndex >=1) { // 右
                    _setActiveIndex(_activeIndex - 1);
                    mainContainerEl.current.style.transform = `translateX(-${_activeIndex - 1}00%)`
                } else if (additionPercent <= -0.3 && _activeIndex <tabCount-1) { // 左
                    _setActiveIndex(_activeIndex + 1);
                    mainContainerEl.current.style.transform = `translateX(-${_activeIndex + 1}00%)`
                } else {
                    mainContainerEl.current.style.transform = `translateX(-${_activeIndex}00%)`
                }
                return { ...state, endClientX: action.value };
            case 'changTimeStamp':
                var startTimeStamp = action.value;
                return { ...state, startTimeStamp };
            default:
                return state
        }
    }
    const [tabState, dispatch] = useReducer<TabReducer>(Redecer, { ...initialState, _activeIndex: activeIndex });
    const validChildren = useCallback<() => React.ReactNode>(() => {
        let tabCount = 0;
        const tempTitleList: string[] = []
        const tempChild = React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabItemProps>
            const { name } = childElement.type
            if (name === 'TabItem') {
                tempTitleList.push(childElement.props.title)
                tabCount++;
                return React.cloneElement(childElement, { index })
            } else {
                console.error("Warning: Tab has a child which is not a TabItem component")
            }
        })
        setTitleList(tempTitleList);
        setTabCount(tabCount)
        return tempChild
    }, [children]);
    useEffect(() => {
        setClientWidth(document.body.clientWidth)
        validChildren()
    }, [validChildren])
    function hancleToggleActiveIndex(index: number): void {
        _setActiveIndex(index);
        mainContainerEl.current.style.transform = `translateX(-${index}00%)`
    }
    // function mainContainerElTranslate(index: number, needTransition: boolean = false) {
    //     if (!needTransition) {
    //         mainContainerEl.current.style.transition = 'all 0.1s linear';

    //     } else {

    //     }
    // }
    return (
        <div className={classes}>
            <div className="mu-tab-title-wrap">
                <ul className="mu-tab-title-container">
                    {
                        titleList.map((item, index) => {
                            return <li key={index} className={_activeIndex === index ? 'active' : ''} onClick={hancleToggleActiveIndex.bind(null, index)}>
                                <span>{item}</span>
                                {
                                    _activeIndex === index ? <div className="active-line"></div> : ''
                                }
                            </li>
                        })
                    }
                </ul>

            </div>
            <div className="mu-tab-main-wrap">
                <div className="mu-tab-main-container" ref={mainContainerEl} style={{ transition: 'all 0.1s linear' }}>
                    <TabContext.Provider value={{
                        state: tabState,
                        dispatch
                    }}>
                        {children}
                    </TabContext.Provider>
                </div>
            </div>
        </div>
    )
}

Tab.defaultProps = {
    activeIndex: 0,
}

export default Tab
