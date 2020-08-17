import React from 'react'
import Tab from "@/ui/components/tab/tab"
import TabItem from "@/ui/components/tab/tabItem"


const TabWrap: React.FC = () => {
    return (
        <div className="tab-wrap">
            <Tab className="zidingyi">
                <TabItem title="列表项1" content="列表项内容1" />
                <TabItem title="列表项2" content="列表项内容2" />
                <TabItem title="列表项3" content="列表项内容3" />
                <TabItem title="列表项4" content="列表项内容4" />
            </Tab>
        </div>
    )
}

export default TabWrap;