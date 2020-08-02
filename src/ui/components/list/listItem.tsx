import React, { useEffect } from 'react';
import "./style.less"
import { generateClassName } from "@/ui/utils/utils"
interface BaseListItemProps {
    index: number;
    children: React.ReactChild;
    className: string;
    prefixIcon: string;
    prefixText: string;
    description: string;
    suffixIcon: string;
}

export type ListItemProps = Partial<BaseListItemProps> & { content: string }

const ListItem: React.FC<ListItemProps> = props => {
    const { prefixIcon, prefixText, content, description, suffixIcon } = props
    useEffect(() => {
        console.log('ListItem useEffect')
    })
    const { className } = props;
    const classes = generateClassName('mu', { "list-item": true }, className)
    return (
        <div className={classes}>
            <div className="mu-list-item-prefix">
                {
                    prefixIcon ? <i className="iconfont prefix" dangerouslySetInnerHTML={{__html:prefixIcon}}></i> : ''
                }
                {
                    prefixText ? <p className="prefix">{prefixText}</p> : ''
                }
                <p className="mu-list-item-content">{content}</p>
            </div>
            <div className="mu-list-item-suffix">
                {
                    props.children&&!description &&!suffixIcon ? props.children : ''
                }
                {
                    !props.children && description ? (<p className="mu-list-item-description">{description}</p>) : ''
                }
                {
                    !props.children && suffixIcon ? <i className="iconfont mu-list-item-suffixIcon" dangerouslySetInnerHTML={{__html:suffixIcon}}></i> : ''
                }
            </div>
        </div>
    )
}

export default ListItem
