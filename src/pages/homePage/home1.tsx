import React from 'react'
import ListItem, { ListItemProps } from '@/ui/components/list/listItem'
import ListGroup from '@/ui/components/list/listGroup'
const listArr: { title: string, items: (ListItemProps & { to?: string })[] }[] = [
    {
        title: '',
        items: [{
                content: '按钮',
                to: '/button',
                suffixIcon: '&#xe693;',
            },
            {
                content: '消息提示',
                to: '/message',
                suffixIcon: '&#xe693;',
            },
            {
                content: '正在加载',
                to: '/loading',
                suffixIcon: '&#xe693;',
            },
            {
                content: 'switch',
                to: '/switch',
                suffixIcon: '&#xe693;',
            },
            {
                content: 'bubble',
                to: '/bubble',
                suffixIcon: '&#xe693;',
            },
            {
                content: '折叠页',
                to: '/superposition',
                suffixIcon: '&#xe693;',
            },
            {
                content: '列表页',
                to: '/list',
                suffixIcon: '&#xe693;',
            },
            {
                content: 'slider',
                to: '/slider',
                suffixIcon: '&#xe693;',
            }
        ]
    },
]

// import ButtonWrap from "@/pages/button/buttonWrap"
// import MessageWrap from "@/pages/message/messageWrap"
// import SwitchWrap from "@/pages/switch/switchWrap"
// import UpRefreshWrap from "@/pages/upRefresh/upRefreshWrap"
// import LoadingWrap from "@/pages/loading/loadingWrap"
// import BubbleWrap from "@/pages/bubble/bubbleWrap"
// import Superposition from "@/pages/superposition/superposition"

const Home1: React.FC = props => {
    return (
        <div className="home1-wrap">
            {/* home1 */}
            <div className="list-wrap">
                <ul className="list-group">
                    {listArr.map((item) => {
                        return (
                            <li className="group-item" key={item.title}>
                                <p>{item.title}</p>
                                <ListGroup>
                                    {
                                        item.items.map((innerItem, index) => {
                                            return (
                                                <ListItem key={index} {...innerItem} onClick={() => {
                                                    window.location.href = innerItem.to || "index"
                                                }} />
                                            )
                                        })
                                    }
                                </ListGroup>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Home1