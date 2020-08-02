import React from 'react'
import { generateClassName } from "@/ui/utils/utils"
import {ListItemProps} from "./listItem"
import "./style.less"
export interface ListGroupProps {
    children: React.ReactChild[] | React.ReactChild;
    className?: string;
};

const ListGroup: React.FC<ListGroupProps> = props => {
    const { children, className } = props;
    const classes = generateClassName("mu",{"list-group":true}, className)
    function renderChild(): React.ReactChild[] | any {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<ListItemProps>
            const { name } = childElement.type
            if (name === 'ListItem') {
                return React.cloneElement(childElement, {index})
            } else {
                console.error("Warning: ListGroup has a child which is not a ListItem component")
            }
        })
    }
    return (
        <div className={classes}>
            {renderChild()}
        </div>
    )
}

export default ListGroup


