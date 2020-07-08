import React from 'react'
import Notification from 'rc-notification'
import {generateClassName} from '@/ui/utils/utils'
import './style.less'


type MessageType = 'primary' | 'info' | 'success' | 'warning' | 'danger'

interface IConfig {
  className?:string;
  type?:MessageType;
  duration?:number;
  icon?:string;
  message:string;
}


const Message = (function () {
  let notification:any = null
  const open = (config:IConfig) => {
    const {
      type = 'default',  className, duration = 3, icon, message,
    } = config
    const classesName = generateClassName("mu-",{
      [type] : !!type
    }, className)
    console.log(classesName)
    notification.notice({
      content: <div>
        <p className={'mu-message ' + classesName}>
          {icon ? '' :''}
          {message}
        </p>
      </div>,
      duration,
    })
  }


  if (notification) {
    return {
      open
    }
  }
  // 如果为创建实例，则创建默认实例
  Notification.newInstance({}, (notice) => notification = notice)
  return {
    open
  }
})()
export default Message