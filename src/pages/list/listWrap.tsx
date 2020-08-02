import React from 'react'
import "./style.less";
import ListGroup from "@/ui/components/list/listGroup";
import ListItem, { ListItemProps } from "@/ui/components/list/listItem"
import Switch from "@/ui/components/switch/switch"
interface ListWrapProps {

}

const listArr: { title: string, items: ListItemProps[] }[] = [
    {
        title: '基本使用',
        items: [{
            content: '列表项1'
        }, {
            content: '列表项2'
        }, {
            content: '列表项3'
        }, {
            content: '列表项4'
        },
        ]
    },
    {
        title: '前缀',
        items: [
            {
                prefixIcon: '&#xe786;',
                content: '我有前缀'
            }, {
                prefixIcon: '&#xe770;',
                content: '红包拿来'
            }, {
                prefixText: '哼',
                content: '谁没有一样'
            },
        ]
    },
    {
        title: '后缀',
        items: [
            {
                suffixIcon: '&#xe693;',
                content: '我有后缀缀'
            }, {
                suffixIcon: '&#xe693;',
                content: '我也有'
            }, {
                suffixIcon: '&#xe693;',
                description: '我还比你们多一段文字',
                content: '谁没有一样'
            },
        ]
    },
    {
        title: '自定义后缀',
        items: [
            {
                content: '我可以自定义哦',
                children: <Switch checked={false} size="normal" onChange={() => { }} />
            }, {
                content: '我也有',
                children: <Switch checked={true} size="small" onChange={() => { }} />,
            }, {
                content: '谁没有一样',
                children: <Switch checked={false} size="big" onChange={() => { }} />,
            },
        ]
    },
]

// import {} from ""

const ListWrap: React.FC<ListWrapProps> = props => {
    return (
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
                                            <ListItem key={index} {...innerItem} />
                                        )
                                    })
                                }
                            </ListGroup>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default ListWrap