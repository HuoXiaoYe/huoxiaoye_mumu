import React from 'react'

type AlertType = 'default' | 'primary' | 'success' | 'info' | 'warning' 

interface IAlert {
    type:AlertType;
    title:string;
    autoClose:boolean;
    children:React.ReactNode;
}

const Alert:React.FC<IAlert> = props => {
    return (
        <div className="alert-wrap">
            <div className="header">
                {
                    props.title ? <div className="title">{}</div> : ''
                }
                {
                    
                }
            </div>
        </div>
    )
}

export default Alert;